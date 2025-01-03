///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CarpentryNails } from "./carpentry-nails";
import { Wood } from "./wood";

export class Frame extends Item {
    constructor() {
        super(
            "frame",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new CarpentryNails()),
				new CraftingMaterial(20, new Wood()),
				new CraftingMaterial(20, new Wood()),
				new CraftingMaterial(20, new Wood()),
				new CraftingMaterial(20, new Wood()),
            ],
            1,
            ""
        );
    }
}
