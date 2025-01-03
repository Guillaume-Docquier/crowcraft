///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CarpentryNails } from "./carpentry-nails";
import { WoodShingles } from "./wood-shingles";

export class RoofSegment extends Item {
    constructor() {
        super(
            "roof segment",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(4, new CarpentryNails()),
				new CraftingMaterial(4, new WoodShingles()),
            ],
            1,
            ""
        );
    }
}
