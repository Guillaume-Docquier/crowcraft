///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AnimalBlood } from "./animal-blood";
import { AnimalBone } from "./animal-bone";
import { GroundBlackPepper } from "./ground-black-pepper";
import { LargeCookingPot } from "./large-cooking-pot";
import { SeasoningSalt } from "./seasoning-salt";
import { WaterFlask } from "./water-flask";

export class BoneBroth extends Item {
    constructor() {
        super(
            "bone broth",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(2, new WaterFlask()),
				new CraftingMaterial(1, new AnimalBone()),
				new CraftingMaterial(2, new GroundBlackPepper()),
				new CraftingMaterial(2, new SeasoningSalt()),
				new CraftingMaterial(1, new AnimalBlood()),
            ],
            1,
            ""
        );
    }
}
