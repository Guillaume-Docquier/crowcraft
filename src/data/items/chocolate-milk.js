///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ChocolateBar } from "./chocolate-bar";
import { EmptyFlask } from "./empty-flask";
import { PasteurizedMilk } from "./pasteurized-milk";
import { Peppermint } from "./peppermint";
import { SugarCane } from "./sugar-cane";

export class ChocolateMilk extends Item {
    constructor() {
        super(
            "chocolate milk",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new ChocolateBar()),
				new CraftingMaterial(1, new PasteurizedMilk()),
				new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new SugarCane()),
				new CraftingMaterial(1, new Peppermint()),
            ],
            1,
            ""
        );
    }
}
