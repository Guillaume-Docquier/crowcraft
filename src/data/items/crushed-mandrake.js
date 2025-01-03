///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { Mandrake } from "./mandrake";

export class CrushedMandrake extends CrushedHerbs {
    constructor() {
        super(
            "crushed mandrake",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Mandrake()),
            ],
            1,
            "grind food items"
        );
    }
}
