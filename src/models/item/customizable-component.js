import { CraftingMaterial } from "../crafting-material";
import { Sorting } from "utils";
import { Item } from "./item";
import { String } from "utils";
import { Rarities } from "models";

export class CustomizableComponent extends Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity, craftingRecipeName, possibleCustomizations) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingRecipeName);

        this.possibleCustomizations = possibleCustomizations.sort(
            Sorting.ascending(
                customization => customization.customizationEffects[Rarities.Legendary.name]
                    .map(itemStat => itemStat.name)
                    .join("."))
        );

        this.customization = null;
    }

    get name() {
        if (!this.customization) {
            return this._name;
        }

        return `${this._name} (${this.customization.name})`;
    }

    get craftingMaterials() {
        if (!this.customization) {
            return this._craftingMaterials;
        }

        const craftingMaterials = []
        let replacementIndex = 0;
        for (const craftingMaterial of this._craftingMaterials) {
            if (craftingMaterial.item.isGeneric && replacementIndex < this.customization.replacementMaterials.length) {
                const replacementMaterial = this.customization.replacementMaterials[replacementIndex];
                craftingMaterials.push(new CraftingMaterial(craftingMaterial.quantity, replacementMaterial));
                replacementIndex++;
            } else {
                craftingMaterials.push(craftingMaterial);
            }
        }

        return craftingMaterials;
    }

    get assetId() {
        let assetId = super.assetId;
        if (this.customization) {
            assetId += String.capitalize(this.customization.id);
        }

        return assetId;
    }

    getCustomizableComponents() {
        const customizableComponents = super.getCustomizableComponents();
        customizableComponents.push(this);

        return customizableComponents;
    }

    getCustomizationEffects() {
        if (!this.customization) {
            return [];
        }

        return this.customization.getCustomizationEffects(this.rarity);
    }

    customize(customization) {
        this.customization = customization;
        this.setRarity(this.rarity);
    }
};

export class Customization {
    constructor(name, replacementMaterials, customizationEffects) {
        this.id = String.decapitalize(
            name
                .split(" ")
                .map(String.capitalize)
                .join("")
        );
        this.name = name; 
        this.replacementMaterials = replacementMaterials;
        this.customizationEffects = customizationEffects;
    }

    getCustomizationEffects(rarity) {
        try {
            return this.customizationEffects[rarity.name].map(itemStat => itemStat.getEffect(rarity));
        }
        catch (e) {
            console.error(`Error in customization stats for item: ${this.name}`);
        }

        return [];
    }
};

export class CustomizationEffect {
    constructor(effect, value) {
        this.effect = effect; 
        this.value = value; 
    }
};
