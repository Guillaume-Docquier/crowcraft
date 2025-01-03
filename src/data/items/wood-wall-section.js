///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Frame } from "./frame";
import { WoodStakes } from "./wood-stakes";

export class WoodWallSection extends Item {
    constructor() {
        super(
            "wood wall section",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(8, new WoodStakes()),
				new CraftingMaterial(2, new Frame()),
            ],
            1,
            "wall section"
        );
    }
}
