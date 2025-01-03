///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedStonebornLeg } from "./desiccated-stoneborn-leg";

export class RestoredStonebornLeg extends Item {
    constructor() {
        super(
            "restored stoneborn leg",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedStonebornLeg()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored leg"
        );
    }
}
