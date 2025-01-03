///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { LargeCookingPot } from "./large-cooking-pot";
import { RawMilk } from "./raw-milk";

export class PasteurizedMilk extends Item {
    constructor() {
        super(
            "pasteurized milk",
            [Professions.Cooking],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new RawMilk()),
				new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(2, new EtherealDust()),
            ],
            5,
            ""
        );
    }
}
