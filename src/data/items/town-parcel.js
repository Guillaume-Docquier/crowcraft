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
import { VillageParcel } from "./village-parcel";

export class TownParcel extends Item {
    constructor() {
        super(
            "town parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new VillageParcel()),
				new CraftingMaterial(1, new HamletParcel()),
				new CraftingMaterial(40000, new Gold()),
				new CraftingMaterial(3, new Soil()),
            ],
            1,
            ""
        );
    }
}
