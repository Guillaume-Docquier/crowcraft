///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedBeastLeg } from "./desiccated-beast-leg";

export class RestoredBeastLeg extends Item {
    constructor() {
        super(
            "restored beast leg",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedBeastLeg()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored leg"
        );
    }
}
