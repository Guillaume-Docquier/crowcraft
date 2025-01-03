///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Hide } from "./hide";
import { Mulch } from "./mulch";

export class WallInsulation extends Item {
    constructor() {
        super(
            "wall insulation",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(10, new Hide()),
				new CraftingMaterial(4, new Mulch()),
            ],
            1,
            ""
        );
    }
}
