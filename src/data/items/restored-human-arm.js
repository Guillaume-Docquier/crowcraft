///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedHumanArm } from "./desiccated-human-arm";

export class RestoredHumanArm extends Item {
    constructor() {
        super(
            "restored human arm",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedHumanArm()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored arm"
        );
    }
}
