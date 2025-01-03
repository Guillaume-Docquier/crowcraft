///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Apple } from "./apple";
import { EmptyFlask } from "./empty-flask";
import { SugarCane } from "./sugar-cane";
import { WaterFlask } from "./water-flask";
import { Yeast } from "./yeast";

export class RedWine extends Item {
    constructor() {
        super(
            "red wine",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(1, new Apple()),
				new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new SugarCane()),
				new CraftingMaterial(1, new Yeast()),
            ],
            1,
            ""
        );
    }
}
