///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Apple } from "./apple";
import { WaterFlask } from "./water-flask";

export class AppleJuice extends Item {
    constructor() {
        super(
            "apple juice",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(1, new Apple()),
            ],
            1,
            "juice"
        );
    }
}
