///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Ore } from "./ore";

export class CarpentryNails extends Item {
    constructor() {
        super(
            "carpentry nails",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(20, new Ore()),
				new CraftingMaterial(20, new Ore()),
				new CraftingMaterial(20, new Ore()),
            ],
            1,
            ""
        );
    }
}
