///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CookingFoil } from "./cooking-foil";
import { PotatoFlour } from "./potato-flour";
import { WaterFlask } from "./water-flask";
import { Yeast } from "./yeast";

export class Bread extends Item {
    constructor() {
        super(
            "bread",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new Yeast()),
				new CraftingMaterial(2, new PotatoFlour()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(2, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
