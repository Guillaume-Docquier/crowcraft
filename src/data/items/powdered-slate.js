///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedStone } from "./powdered-stone";
import { Slate } from "./slate";

export class PowderedSlate extends PowderedStone {
    constructor() {
        super(
            "powdered slate",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Slate()),
            ],
            1,
            "grind resource"
        );
    }
}
