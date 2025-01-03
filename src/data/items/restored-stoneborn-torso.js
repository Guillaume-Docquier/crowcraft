///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedStonebornTorso } from "./desiccated-stoneborn-torso";

export class RestoredStonebornTorso extends Item {
    constructor() {
        super(
            "restored stoneborn torso",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedStonebornTorso()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored torso"
        );
    }
}
