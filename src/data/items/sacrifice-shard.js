///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { RawMaterial, Rarities } from "models";

export class SacrificeShard extends RawMaterial {
    constructor(
        name = "sacrifice shard",
        professions = [],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
