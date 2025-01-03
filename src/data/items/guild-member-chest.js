///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ChaosEmber } from "./chaos-ember";
import { Ore } from "./ore";
import { RoughGem } from "./rough-gem";
import { Wood } from "./wood";

export class GuildMemberChest extends Item {
    constructor() {
        super(
            "guild member chest",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new ChaosEmber()),
				new CraftingMaterial(36, new Ore()),
				new CraftingMaterial(72, new Wood()),
				new CraftingMaterial(36, new Ore()),
				new CraftingMaterial(72, new Wood()),
				new CraftingMaterial(8, new RoughGem()),
            ],
            1,
            ""
        );
    }
}
