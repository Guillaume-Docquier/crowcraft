///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Produce } from "./produce";
import { Gold } from "./gold";

export class Potato extends Produce {
    constructor() {
        super(
            "potato",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(20, new Gold()),
            ],
            1,
            ""
        );
    }
}
