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

export class VassalChest extends Item {
    constructor() {
        super(
            "vassal chest",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(67, new EtherealDust()),
				new CraftingMaterial(23, new Ore()),
				new CraftingMaterial(45, new Wood()),
				new CraftingMaterial(23, new Ore()),
				new CraftingMaterial(45, new Wood()),
            ],
            1,
            ""
        );
    }
}
