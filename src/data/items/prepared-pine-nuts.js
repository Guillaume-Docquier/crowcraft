///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { PineNuts } from "./pine-nuts";

export class PreparedPineNuts extends Item {
    constructor() {
        super(
            "prepared pine nuts",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new PineNuts()),
            ],
            2,
            "scavenger's snacks"
        );
    }
}
