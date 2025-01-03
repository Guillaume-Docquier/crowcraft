///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedElvenLeg } from "./desiccated-elven-leg";

export class RestoredElvenLeg extends Item {
    constructor() {
        super(
            "restored elven leg",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedElvenLeg()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored leg"
        );
    }
}
