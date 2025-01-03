///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedElvenHead } from "./desiccated-elven-head";

export class RestoredElvenHead extends Item {
    constructor() {
        super(
            "restored elven head",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedElvenHead()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored head"
        );
    }
}
