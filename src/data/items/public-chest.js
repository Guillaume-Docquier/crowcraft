///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Ore } from "./ore";
import { Wood } from "./wood";

export class PublicChest extends Item {
    constructor() {
        super(
            "public chest",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(45, new EtherealDust()),
				new CraftingMaterial(18, new Ore()),
				new CraftingMaterial(36, new Wood()),
				new CraftingMaterial(18, new Ore()),
				new CraftingMaterial(36, new Wood()),
            ],
            1,
            ""
        );
    }
}
