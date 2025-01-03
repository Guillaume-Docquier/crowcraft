///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { HotPeppers } from "./hot-peppers";
import { IceCream } from "./ice-cream";
import { LargeCookingPot } from "./large-cooking-pot";
import { Peppermint } from "./peppermint";
import { PotatoFlour } from "./potato-flour";

export class BakedIceCream extends Item {
    constructor() {
        super(
            "baked ice cream",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new Peppermint()),
				new CraftingMaterial(1, new IceCream()),
				new CraftingMaterial(1, new PotatoFlour()),
				new CraftingMaterial(1, new HotPeppers()),
            ],
            1,
            ""
        );
    }
}
