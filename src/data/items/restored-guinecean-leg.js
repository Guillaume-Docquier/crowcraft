///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedGuineceanLeg } from "./desiccated-guinecean-leg";

export class RestoredGuineceanLeg extends Item {
    constructor() {
        super(
            "restored guinecean leg",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedGuineceanLeg()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored leg"
        );
    }
}
