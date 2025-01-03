///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Bread } from "./bread";
import { CookingFoil } from "./cooking-foil";
import { FreshButter } from "./fresh-butter";
import { GroundBlackPepper } from "./ground-black-pepper";
import { Produce } from "./produce";
import { SpiderMeat } from "./spider-meat";

export class SpiderMeatSandwich extends Item {
    constructor() {
        super(
            "spider meat sandwich",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(1, new SpiderMeat()),
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
