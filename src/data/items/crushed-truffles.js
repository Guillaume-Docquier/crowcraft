///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { Truffles } from "./truffles";

export class CrushedTruffles extends CrushedHerbs {
    constructor() {
        super(
            "crushed truffles",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Truffles()),
            ],
            1,
            "grind food items"
        );
    }
}
