///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedGuineceanArm } from "./desiccated-guinecean-arm";

export class RestoredGuineceanArm extends Item {
    constructor() {
        super(
            "restored guinecean arm",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedGuineceanArm()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored arm"
        );
    }
}
