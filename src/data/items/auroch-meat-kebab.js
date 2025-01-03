///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AurochMeat } from "./auroch-meat";
import { Produce } from "./produce";
import { RoastingStick } from "./roasting-stick";
import { SeasoningSalt } from "./seasoning-salt";

export class AurochMeatKebab extends Item {
    constructor() {
        super(
            "auroch meat kebab",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new AurochMeat()),
				new CraftingMaterial(1, new RoastingStick()),
				new CraftingMaterial(1, new SeasoningSalt()),
				new CraftingMaterial(1, new Produce()),
            ],
            1,
            "kebab skewers"
        );
    }
}
