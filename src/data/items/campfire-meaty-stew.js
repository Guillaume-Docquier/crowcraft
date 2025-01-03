///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { LargeCookingPot } from "./large-cooking-pot";
import { Meat } from "./meat";
import { SeasoningSalt } from "./seasoning-salt";
import { WaterFlask } from "./water-flask";

export class CampfireMeatyStew extends Item {
    constructor() {
        super(
            "campfire meaty stew",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(2, new Meat()),
				new CraftingMaterial(2, new SeasoningSalt()),
				new CraftingMaterial(2, new WaterFlask()),
            ],
            1,
            "campfire stew"
        );
    }
}
