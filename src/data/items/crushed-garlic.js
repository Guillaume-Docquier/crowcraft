///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { Garlic } from "./garlic";

export class CrushedGarlic extends CrushedHerbs {
    constructor() {
        super(
            "crushed garlic",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Garlic()),
            ],
            1,
            "grind food items"
        );
    }
}
