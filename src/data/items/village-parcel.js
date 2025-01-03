///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gold } from "./gold";
import { HamletParcel } from "./hamlet-parcel";
import { ShireParcel } from "./shire-parcel";
import { Soil } from "./soil";

export class VillageParcel extends Item {
    constructor() {
        super(
            "village parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new ShireParcel()),
				new CraftingMaterial(1, new HamletParcel()),
				new CraftingMaterial(35000, new Gold()),
				new CraftingMaterial(3, new Soil()),
            ],
            1,
            ""
        );
    }
}
