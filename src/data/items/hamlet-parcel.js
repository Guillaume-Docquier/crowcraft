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
import { WoodlandHillsParcel } from "./woodland-hills-parcel";

export class HamletParcel extends Item {
    constructor() {
        super(
            "hamlet parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new EstateParcel()),
				new CraftingMaterial(1, new WoodlandHillsParcel()),
				new CraftingMaterial(25000, new Gold()),
				new CraftingMaterial(2, new Soil()),
            ],
            1,
            ""
        );
    }
}
