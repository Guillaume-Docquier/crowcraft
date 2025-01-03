///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Produce } from "./produce";
import { Gold } from "./gold";

export class Carrot extends Produce {
    constructor() {
        super(
            "carrot",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(50, new Gold()),
            ],
            1,
            ""
        );
    }
}
