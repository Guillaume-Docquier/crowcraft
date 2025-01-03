///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CookingFoil } from "./cooking-foil";
import { EtherealDust } from "./ethereal-dust";
import { Mushroom } from "./mushroom";
import { WaterFlask } from "./water-flask";

export class Yeast extends Item {
    constructor() {
        super(
            "yeast",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Mushroom()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(2, new EtherealDust()),
				new CraftingMaterial(2, new WaterFlask()),
            ],
            5,
            ""
        );
    }
}
