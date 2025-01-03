///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Beeswax } from "./beeswax";
import { CookingFoil } from "./cooking-foil";
import { PasteurizedMilk } from "./pasteurized-milk";
import { Yeast } from "./yeast";

export class ArtisanCheese extends Item {
    constructor() {
        super(
            "artisan cheese",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new PasteurizedMilk()),
				new CraftingMaterial(1, new Yeast()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(1, new Beeswax()),
            ],
            1,
            ""
        );
    }
}
