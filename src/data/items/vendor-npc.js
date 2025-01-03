///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { HumanVessel } from "./human-vessel";

export class VendorNpc extends Item {
    constructor() {
        super(
            "vendor npc",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(75, new EtherealDust()),
				new CraftingMaterial(1, new HumanVessel()),
            ],
            1,
            ""
        );
    }
}
