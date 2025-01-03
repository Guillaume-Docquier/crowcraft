///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ore } from "./ore";

export class OreConcentrate extends Item {
    constructor() {
        super(
            "ore concentrate",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(20, new Ore()),
            ],
            1,
            ""
        );
    }
}
