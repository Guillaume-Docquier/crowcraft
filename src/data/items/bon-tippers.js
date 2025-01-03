///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CurrantBerries } from "./currant-berries";
import { GroundBlackPepper } from "./ground-black-pepper";
import { PasteurizedMilk } from "./pasteurized-milk";
import { RedWine } from "./red-wine";
import { Tippers } from "./tippers";

export class BonTippers extends Item {
    constructor() {
        super(
            "bon tippers",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(2, new PasteurizedMilk()),
				new CraftingMaterial(1, new CurrantBerries()),
				new CraftingMaterial(2, new RedWine()),
				new CraftingMaterial(10, new Tippers()),
				new CraftingMaterial(1, new GroundBlackPepper()),
            ],
            1,
            ""
        );
    }
}
