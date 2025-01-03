import { DisciplinesAndBelts } from "./disciplines-and-belts";

export const applyDiscsAndBeltsDiscounts = (craftingMaterial, crafterConfiguration = {}) => {
    let bestNewCraftingMaterials = craftingMaterial.item.craftingMaterials;
    let bestMatsCount = 999_999;
    for (const profession of craftingMaterial.item.professions) {
        const newCraftingMaterials = getNewCraftingMaterials(craftingMaterial.item, profession, crafterConfiguration[profession]);
        const newMatsCount = getMatsCount(newCraftingMaterials);
        if (newCraftingMaterials && newMatsCount < bestMatsCount) {
            bestNewCraftingMaterials = newCraftingMaterials;
            bestMatsCount = newMatsCount
        }
    }

    for (let i = 0; i < craftingMaterial.item.craftingMaterials.length; i++) {
        craftingMaterial.item._craftingMaterials[i].quantity = bestNewCraftingMaterials[i].quantity;
    }
};

const getNewCraftingMaterials = (item, profession, professionSetting = {}) => {
    const key = `${item.baseName}.${profession}-disc-${professionSetting.discipline}.${profession}-belt-${professionSetting.belt}`

    return DisciplinesAndBelts[key];
}

const getMatsCount = (craftingMaterials = []) => craftingMaterials.reduce((count, mat) => count + mat.quantity, 0);
