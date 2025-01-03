///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CoffeeBeans } from "./coffee-beans";
import { EmptyFlask } from "./empty-flask";
import { WaterFlask } from "./water-flask";

export class PremiumRoastedCoffee extends Item {
    constructor() {
        super(
            "premium roasted coffee",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new CoffeeBeans()),
				new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "coffee"
        );
    }
}
