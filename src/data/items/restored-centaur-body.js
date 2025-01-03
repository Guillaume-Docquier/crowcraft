///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedCentaurBody } from "./desiccated-centaur-body";
import { DesiccatedCentaurLeg } from "./desiccated-centaur-leg";

export class RestoredCentaurBody extends Item {
    constructor() {
        super(
            "restored centaur body",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedCentaurBody()),
				new CraftingMaterial(2, new Ambrosia()),
				new CraftingMaterial(2, new Ambrosia()),
				new CraftingMaterial(1, new DesiccatedCentaurLeg()),
				new CraftingMaterial(1, new DesiccatedCentaurLeg()),
				new CraftingMaterial(1, new DesiccatedCentaurLeg()),
				new CraftingMaterial(1, new DesiccatedCentaurLeg()),
            ],
            1,
            ""
        );
    }
}
