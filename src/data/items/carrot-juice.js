///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Carrot } from "./carrot";
import { WaterFlask } from "./water-flask";

export class CarrotJuice extends Item {
    constructor() {
        super(
            "carrot juice",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(1, new Carrot()),
            ],
            1,
            "juice"
        );
    }
}
