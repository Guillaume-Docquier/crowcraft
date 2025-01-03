///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CocoaBeans } from "./cocoa-beans";
import { CookingFoil } from "./cooking-foil";
import { RawMilk } from "./raw-milk";
import { SugarCane } from "./sugar-cane";

export class ChocolateBar extends Item {
    constructor() {
        super(
            "chocolate bar",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new RawMilk()),
				new CraftingMaterial(1, new CookingFoil()),
				new CraftingMaterial(1, new SugarCane()),
				new CraftingMaterial(1, new CocoaBeans()),
            ],
            1,
            ""
        );
    }
}
