///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { LargeCookingPot } from "./large-cooking-pot";
import { Mushroom } from "./mushroom";
import { SeasoningSalt } from "./seasoning-salt";
import { WaterFlask } from "./water-flask";

export class CampfireMushroomStew extends Item {
    constructor() {
        super(
            "campfire mushroom stew",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(2, new Mushroom()),
				new CraftingMaterial(2, new SeasoningSalt()),
				new CraftingMaterial(2, new WaterFlask()),
            ],
            1,
            "campfire stew"
        );
    }
}
