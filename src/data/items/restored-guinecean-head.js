///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedGuineceanHead } from "./desiccated-guinecean-head";

export class RestoredGuineceanHead extends Item {
    constructor() {
        super(
            "restored guinecean head",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedGuineceanHead()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored head"
        );
    }
}
