///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CapitalParcel } from "./capital-parcel";
import { Gold } from "./gold";

export class MountainCitadelParcel extends Item {
    constructor() {
        super(
            "mountain citadel parcel",
            [Professions.Stonemason],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new CapitalParcel()),
				new CraftingMaterial(1, new CapitalParcel()),
				new CraftingMaterial(1, new CapitalParcel()),
				new CraftingMaterial(60000, new Gold()),
            ],
            1,
            ""
        );
    }
}
