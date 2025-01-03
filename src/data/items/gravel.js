///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Stone } from "./stone";

export class Gravel extends Item {
    constructor() {
        super(
            "gravel",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(20, new Stone()),
            ],
            1,
            ""
        );
    }
}
