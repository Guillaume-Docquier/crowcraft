///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gold } from "./gold";
import { Soil } from "./soil";
import { WoodlandGroveParcel } from "./woodland-grove-parcel";
import { WoodlandHillsParcel } from "./woodland-hills-parcel";

export class EstateParcel extends Item {
    constructor() {
        super(
            "estate parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new WoodlandHillsParcel()),
				new CraftingMaterial(1, new WoodlandGroveParcel()),
				new CraftingMaterial(10000, new Gold()),
				new CraftingMaterial(1, new Soil()),
            ],
            1,
            ""
        );
    }
}
