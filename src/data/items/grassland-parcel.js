///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Soil } from "./soil";

export class GrasslandParcel extends Item {
    constructor() {
        super(
            "grassland parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(10, new Soil()),
            ],
            1,
            ""
        );
    }
}
