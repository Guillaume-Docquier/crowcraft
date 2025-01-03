///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedElvenArm } from "./desiccated-elven-arm";

export class RestoredElvenArm extends Item {
    constructor() {
        super(
            "restored elven arm",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedElvenArm()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored arm"
        );
    }
}
