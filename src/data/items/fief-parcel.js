///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gold } from "./gold";
import { ShireParcel } from "./shire-parcel";
import { Soil } from "./soil";
import { TownParcel } from "./town-parcel";

export class FiefParcel extends Item {
    constructor() {
        super(
            "fief parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new ShireParcel()),
				new CraftingMaterial(1, new TownParcel()),
				new CraftingMaterial(45000, new Gold()),
				new CraftingMaterial(3, new Soil()),
            ],
            1,
            ""
        );
    }
}
