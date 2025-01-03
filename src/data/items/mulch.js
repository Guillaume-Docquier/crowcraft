///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Wood } from "./wood";

export class Mulch extends Item {
    constructor() {
        super(
            "mulch",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(20, new Wood()),
            ],
            1,
            ""
        );
    }
}
