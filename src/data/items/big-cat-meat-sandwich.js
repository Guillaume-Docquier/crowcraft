///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BigCatMeat } from "./big-cat-meat";
import { Bread } from "./bread";
import { CookingFoil } from "./cooking-foil";
import { FreshButter } from "./fresh-butter";
import { GroundBlackPepper } from "./ground-black-pepper";
import { Produce } from "./produce";

export class BigCatMeatSandwich extends Item {
    constructor() {
        super(
            "big cat meat sandwich",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(1, new BigCatMeat()),
				new CraftingMaterial(1, new Bread()),
				new CraftingMaterial(1, new Produce()),
				new CraftingMaterial(1, new FreshButter()),
				new CraftingMaterial(3, new GroundBlackPepper()),
            ],
            1,
            "grilled sandwich"
        );
    }
}
