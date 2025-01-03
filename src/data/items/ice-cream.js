///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { LargeCookingPot } from "./large-cooking-pot";
import { PasteurizedMilk } from "./pasteurized-milk";
import { SacrificeShard } from "./sacrifice-shard";
import { SugarCane } from "./sugar-cane";
import { WaterFlask } from "./water-flask";

export class IceCream extends Item {
    constructor() {
        super(
            "ice cream",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new SacrificeShard()),
				new CraftingMaterial(1, new PasteurizedMilk()),
				new CraftingMaterial(1, new SugarCane()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
