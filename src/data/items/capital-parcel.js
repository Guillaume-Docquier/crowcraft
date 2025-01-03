///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CityParcel } from "./city-parcel";
import { Gold } from "./gold";
import { Soil } from "./soil";

export class CapitalParcel extends Item {
    constructor() {
        super(
            "capital parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new CityParcel()),
				new CraftingMaterial(1, new CityParcel()),
				new CraftingMaterial(50000, new Gold()),
				new CraftingMaterial(4, new Soil()),
            ],
            1,
            ""
        );
    }
}
