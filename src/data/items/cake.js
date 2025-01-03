///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { FreshButter } from "./fresh-butter";
import { LargeCookingPot } from "./large-cooking-pot";
import { PasteurizedMilk } from "./pasteurized-milk";
import { PotatoFlour } from "./potato-flour";
import { SugarCane } from "./sugar-cane";
import { WaterFlask } from "./water-flask";

export class Cake extends Item {
    constructor() {
        super(
            "cake",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new FreshButter()),
				new CraftingMaterial(1, new PasteurizedMilk()),
				new CraftingMaterial(2, new PotatoFlour()),
				new CraftingMaterial(1, new SugarCane()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
