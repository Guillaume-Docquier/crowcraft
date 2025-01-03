///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CookingFoil } from "./cooking-foil";
import { EtherealDust } from "./ethereal-dust";
import { PulverizedPotatoes } from "./pulverized-potatoes";

export class PotatoFlour extends Item {
    constructor() {
        super(
            "potato flour",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new PulverizedPotatoes()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(2, new EtherealDust()),
            ],
            5,
            ""
        );
    }
}
