///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { FiefParcel } from "./fief-parcel";
import { Gold } from "./gold";
import { Soil } from "./soil";

export class CityParcel extends Item {
    constructor() {
        super(
            "city parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new FiefParcel()),
				new CraftingMaterial(1, new FiefParcel()),
				new CraftingMaterial(55000, new Gold()),
				new CraftingMaterial(4, new Soil()),
            ],
            1,
            ""
        );
    }
}
