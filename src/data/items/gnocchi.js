///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { LargeCookingPot } from "./large-cooking-pot";
import { PotatoFlour } from "./potato-flour";
import { PulverizedPotatoes } from "./pulverized-potatoes";
import { WaterFlask } from "./water-flask";

export class Gnocchi extends Item {
    constructor() {
        super(
            "gnocchi",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new PotatoFlour()),
				new CraftingMaterial(2, new PulverizedPotatoes()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
