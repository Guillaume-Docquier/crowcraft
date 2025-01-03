///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EstateParcel } from "./estate-parcel";
import { Gold } from "./gold";
import { Soil } from "./soil";
import { WoodlandGroveParcel } from "./woodland-grove-parcel";

export class WoodlandCreekParcel extends Item {
    constructor() {
        super(
            "woodland creek parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new EstateParcel()),
				new CraftingMaterial(1, new WoodlandGroveParcel()),
				new CraftingMaterial(20000, new Gold()),
				new CraftingMaterial(2, new Soil()),
            ],
            1,
            ""
        );
    }
}
