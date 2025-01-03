///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { Ginseng } from "./ginseng";

export class CrushedGinseng extends CrushedHerbs {
    constructor() {
        super(
            "crushed ginseng",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Ginseng()),
            ],
            1,
            "grind food items"
        );
    }
}
