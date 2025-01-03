///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedStonebornArm } from "./desiccated-stoneborn-arm";

export class RestoredStonebornArm extends Item {
    constructor() {
        super(
            "restored stoneborn arm",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedStonebornArm()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored arm"
        );
    }
}
