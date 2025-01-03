import { Item } from "./item";

export class CustomizedComponent extends Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity, craftingRecipeName, baseItemName) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingRecipeName);

        this.baseItemName = baseItemName
    }

    get baseName() {
        return this.baseItemName;
    }

    get isCraftable() {
        return false;
    }
}