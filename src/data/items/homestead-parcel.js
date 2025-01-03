///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gold } from "./gold";
import { GrasslandParcel } from "./grassland-parcel";

export class HomesteadParcel extends Item {
    constructor() {
        super(
            "homestead parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new GrasslandParcel()),
				new CraftingMaterial(1, new GrasslandParcel()),
				new CraftingMaterial(1, new GrasslandParcel()),
				new CraftingMaterial(5000, new Gold()),
            ],
            1,
            ""
        );
    }
}
