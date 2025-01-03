///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gold } from "./gold";
import { HomesteadParcel } from "./homestead-parcel";
import { Soil } from "./soil";
import { WoodlandGroveParcel } from "./woodland-grove-parcel";

export class WoodlandHillsParcel extends Item {
    constructor() {
        super(
            "woodland hills parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new HomesteadParcel()),
				new CraftingMaterial(1, new WoodlandGroveParcel()),
				new CraftingMaterial(10000, new Gold()),
				new CraftingMaterial(1, new Soil()),
            ],
            1,
            ""
        );
    }
}
