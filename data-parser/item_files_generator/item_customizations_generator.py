import csv
from os import walk
from common import \
    make_item_name, make_class_name, make_file_name_without_extension, ConsoleColors, output_folder, data_folder, get_filenames_of_type, FileTypes, \
    auto_generation_header


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    ITEM_NAME = 2
    CUSTOMIZATION_NAME = 3
    MATERIALS = 4
    EFFECTS_1 = 5
    EFFECTS_2 = 6


def generate_customizations():
    print(ConsoleColors.OKCYAN, "\nGenerating customizations...", ConsoleColors.ENDC)
    customizations_by_item = {}
    for (_, _, filenames) in walk(data_folder):
        for filename in get_filenames_of_type(filenames, FileTypes.CUSTOMIZATIONS):
            with open(f"{data_folder}/{filename}", "r") as tsv_file:
                print(filename)
                customization_entries = csv.reader(tsv_file, delimiter='\t')
                next(customization_entries)  # Skip header
                for customization_entry in customization_entries:
                    if customization_entry[Columns.IS_IMPLEMENTED] != "" and customization_entry[Columns.IS_UP_TO_DATE] != "":
                        item_name = customization_entry[Columns.ITEM_NAME]
                        if item_name not in customizations_by_item:
                            customizations_by_item[item_name] = []

                        customizations_by_item[item_name].append(customization_entry)

    for item_name, customizations in customizations_by_item.items():
        complete_item_customization(item_name, customizations)


def complete_item_customization(item_name, customizations):
    item_name = make_item_name(item_name)
    file_name = make_file_name_without_extension(item_name) + ".js"
    customization_data = [extract_customization_data(item_name, customization) for customization in customizations]

    with open(f"{output_folder}/{file_name}", "r+") as js_file:
        write_js_code(customization_data, js_file, item_name)


def extract_customization_data(item_name, customization):
    customization_name = make_item_name(customization[Columns.CUSTOMIZATION_NAME])
    customization_class_name = f"{make_class_name(customization_name)}{make_class_name(item_name)}Customization"

    replacement_materials = customization[Columns.MATERIALS].lower().split(", ")

    effects_1 = customization[Columns.EFFECTS_1]
    effects_2 = customization[Columns.EFFECTS_2]

    return customization_name, customization_class_name, replacement_materials, effects_1, effects_2


def write_js_code(customization_data, js_file, item_name):
    crafting_materials_set = set(js_file.readline().replace("\n", "").split(","))
    js_code = auto_generation_header + js_file.read() \
        .replace("{imports}", "\n".join(generate_imports(customization_data, crafting_materials_set, item_name))) \
        .replace("{customizations}", "\n\t\t\t\t".join(generate_customization_instanciations(customization_data))) \
        .replace("{customization_classes}", "\n".join(generate_customization_classes(customization_data, item_name)))

    js_file.seek(0)
    js_file.write(js_code)
    js_file.truncate()


def generate_imports(customization_data, crafting_materials_set, item_name):
    customization_name, _, _, _, _ = customization_data[0]
    for _, _, replacement_materials, _, _ in customization_data:
        crafting_materials_set.update([replacement_material for replacement_material in replacement_materials])
    try:
        imports = [f"import {{ {make_class_name(crafting_material_name)} }} from \"./{make_file_name_without_extension(crafting_material_name)}\";" for crafting_material_name in
                   crafting_materials_set]
    except:
        imports = []
        print(ConsoleColors.FAIL, f"Cannot create imports properly from item set {{{crafting_materials_set}}} for customization: {{{customization_name}}} of item {{{item_name}}}", ConsoleColors.ENDC)

    return sorted(imports)


def generate_customization_instanciations(customization_data):
    customization_instanciations = []
    for _, customization_class_name, _, _, _ in customization_data:
        customization_instanciations.append(f"new {customization_class_name}(),")

    return customization_instanciations


def generate_customization_classes(customization_data, item_name):
    js_template = """class {customization_class_name} extends Customization {
    constructor() {
        super(
            "{customization_name}",
            [
                {replacement_materials}
            ],
            {
                [Rarities.Common.name]: [{wb_effect}],
                [Rarities.Uncommon.name]: [{wb_effect}],
                [Rarities.Rare.name]: [{wb_effect}],
                [Rarities.Epic.name]: [{po_effects}],
                [Rarities.Legendary.name]: [{po_effects}],
            }
        )
    }
}
"""

    customization_classes = []
    for customization_name, customization_class_name, replacement_materials, effects_1, effects_2 in customization_data:
        try:
            js_replacement_materials = [f"new {make_class_name(replacement_material)}()," for replacement_material in replacement_materials]
        except:
            js_replacement_materials = []
            print(ConsoleColors.FAIL, f"Cannot create replacement materials properly from replacement_materials {{{replacement_materials}}} for item: {{{item_name}}}", ConsoleColors.ENDC)

        wgb_effects = [f"ItemsStats.{make_class_name(effect)}" for effect in effects_1.split(", ") if effect != ""]
        po_effects = [f"ItemsStats.{make_class_name(effect)}" for effect in effects_2.split(", ") if effect != ""]

        customization_classes.append(
            js_template.replace("{customization_class_name}", customization_class_name)
                .replace("{customization_name}", customization_name)
                .replace("{replacement_materials}", "\n\t\t\t\t".join(js_replacement_materials))
                .replace("{wb_effect}", ", ".join(wgb_effects))
                .replace("{po_effects}", ", ".join(wgb_effects + po_effects))
        )

    return customization_classes


if __name__ == '__main__':
    generate_customizations()
