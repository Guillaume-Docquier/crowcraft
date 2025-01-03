///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { Nightshade } from "./nightshade";

export class CrushedNightshade extends CrushedHerbs {
    constructor() {
        super(
            "crushed nightshade",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Nightshade()),
            ],
            1,
            "grind food items"
        );
    }
}
