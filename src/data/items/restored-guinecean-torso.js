///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { DesiccatedGuineceanTorso } from "./desiccated-guinecean-torso";

export class RestoredGuineceanTorso extends Item {
    constructor() {
        super(
            "restored guinecean torso",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new DesiccatedGuineceanTorso()),
				new CraftingMaterial(2, new Ambrosia()),
            ],
            1,
            "restored torso"
        );
    }
}
