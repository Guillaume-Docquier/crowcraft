///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { WoodGrub } from "./wood-grub";

export class PreparedGrub extends Item {
    constructor() {
        super(
            "prepared grub",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new WoodGrub()),
            ],
            2,
            "scavenger's snacks"
        );
    }
}
