///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Bloodworm } from "./bloodworm";

export class PreparedBloodworm extends Item {
    constructor() {
        super(
            "prepared bloodworm",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Bloodworm()),
            ],
            2,
            "scavenger's snacks"
        );
    }
}
