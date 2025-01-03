///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CookingFoil } from "./cooking-foil";
import { EtherealDust } from "./ethereal-dust";
import { RawMilk } from "./raw-milk";
import { WaterFlask } from "./water-flask";

export class FreshButter extends Item {
    constructor() {
        super(
            "fresh butter",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new RawMilk()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(2, new EtherealDust()),
				new CraftingMaterial(2, new WaterFlask()),
            ],
            5,
            ""
        );
    }
}
