///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedElvenTorso } from "./desiccated-elven-torso";

export class RestoredElvenTorso extends Item {
    constructor() {
        super(
            "restored elven torso",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedElvenTorso()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored torso"
        );
    }
}
