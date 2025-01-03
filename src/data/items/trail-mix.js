///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Apple } from "./apple";
import { CookingFoil } from "./cooking-foil";
import { PineNuts } from "./pine-nuts";

export class TrailMix extends Item {
    constructor() {
        super(
            "trail mix",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(1, new Apple()),
				new CraftingMaterial(1, new PineNuts()),
            ],
            1,
            ""
        );
    }
}
