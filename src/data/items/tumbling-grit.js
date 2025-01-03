///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CuttingGrit } from "./cutting-grit";
import { Stone } from "./stone";
import { WaterFlask } from "./water-flask";

export class TumblingGrit extends Item {
    constructor() {
        super(
            "tumbling grit",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new WaterFlask()),
				new CraftingMaterial(8, new Stone()),
				new CraftingMaterial(1, new CuttingGrit()),
            ],
            1,
            ""
        );
    }
}
