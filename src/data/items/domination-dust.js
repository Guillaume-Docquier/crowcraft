///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class DominationDust extends Item {
    constructor() {
        super(
            "domination dust",
            [Vendors.CraftingDisciplines],
            [Rarities.Rare],
            [
                new CraftingMaterial(4000, new Gold()),
            ],
            1,
            ""
        );
    }
}
