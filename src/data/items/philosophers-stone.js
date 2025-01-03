///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { PhilosophersSolution } from "./philosophers-solution";

export class PhilosophersStone extends Item {
    constructor() {
        super(
            "philosopher's stone",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new PhilosophersSolution()),
				new CraftingMaterial(1, new PhilosophersSolution()),
            ],
            1,
            ""
        );
    }
}
