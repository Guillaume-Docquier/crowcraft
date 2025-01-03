///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedHumanHead } from "./desiccated-human-head";

export class RestoredHumanHead extends Item {
    constructor() {
        super(
            "restored human head",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedHumanHead()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored head"
        );
    }
}
