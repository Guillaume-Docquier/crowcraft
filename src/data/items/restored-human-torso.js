///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedHumanTorso } from "./desiccated-human-torso";

export class RestoredHumanTorso extends Item {
    constructor() {
        super(
            "restored human torso",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedHumanTorso()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored torso"
        );
    }
}
