///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedStonebornHead } from "./desiccated-stoneborn-head";

export class RestoredStonebornHead extends Item {
    constructor() {
        super(
            "restored stoneborn head",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedStonebornHead()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored head"
        );
    }
}
