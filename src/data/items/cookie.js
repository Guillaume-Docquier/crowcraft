///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CookingFoil } from "./cooking-foil";
import { FreshButter } from "./fresh-butter";
import { PasteurizedMilk } from "./pasteurized-milk";
import { PotatoFlour } from "./potato-flour";
import { SugarCane } from "./sugar-cane";
import { WaterFlask } from "./water-flask";

export class Cookie extends Item {
    constructor() {
        super(
            "cookie",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new FreshButter()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(1, new PasteurizedMilk()),
				new CraftingMaterial(1, new PotatoFlour()),
				new CraftingMaterial(1, new SugarCane()),
            ],
            1,
            ""
        );
    }
}
