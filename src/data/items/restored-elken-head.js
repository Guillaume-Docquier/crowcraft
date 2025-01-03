///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedElkenHead } from "./desiccated-elken-head";

export class RestoredElkenHead extends Item {
    constructor() {
        super(
            "restored elken head",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedElkenHead()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored head"
        );
    }
}
