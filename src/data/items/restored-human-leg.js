///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedHumanLeg } from "./desiccated-human-leg";

export class RestoredHumanLeg extends Item {
    constructor() {
        super(
            "restored human leg",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedHumanLeg()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored leg"
        );
    }
}
