///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, Rarities } from "models";

export class DesiccatedHead extends GenericMaterial {
    constructor(
        name = "desiccated head",
        professions = [],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
