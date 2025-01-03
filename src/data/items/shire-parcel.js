///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gold } from "./gold";
import { HamletParcel } from "./hamlet-parcel";
import { Soil } from "./soil";

export class ShireParcel extends Item {
    constructor() {
        super(
            "shire parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new HamletParcel()),
				new CraftingMaterial(1, new HamletParcel()),
				new CraftingMaterial(30000, new Gold()),
				new CraftingMaterial(2, new Soil()),
            ],
            1,
            ""
        );
    }
}
