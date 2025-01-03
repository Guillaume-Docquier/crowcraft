///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Produce } from "./produce";
import { Gold } from "./gold";

export class HotPeppers extends Produce {
    constructor() {
        super(
            "hot peppers",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(30, new Gold()),
            ],
            1,
            ""
        );
    }
}
