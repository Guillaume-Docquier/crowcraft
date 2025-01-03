///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Ore } from "./ore";
import { RoughGem } from "./rough-gem";
import { Wood } from "./wood";

export class NobleChest extends Item {
    constructor() {
        super(
            "noble chest",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(90, new EtherealDust()),
				new CraftingMaterial(27, new Ore()),
				new CraftingMaterial(54, new Wood()),
				new CraftingMaterial(27, new Ore()),
				new CraftingMaterial(54, new Wood()),
				new CraftingMaterial(3, new RoughGem()),
            ],
            1,
            ""
        );
    }
}
