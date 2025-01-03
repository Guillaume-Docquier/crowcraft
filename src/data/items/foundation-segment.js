///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Bricks } from "./bricks";
import { Gravel } from "./gravel";

export class FoundationSegment extends Item {
    constructor() {
        super(
            "foundation segment",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(4, new Bricks()),
				new CraftingMaterial(2, new Gravel()),
            ],
            1,
            ""
        );
    }
}
