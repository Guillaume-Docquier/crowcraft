///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Wood } from "./wood";

export class WoodShingles extends Item {
    constructor() {
        super(
            "wood shingles",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(25, new Wood()),
				new CraftingMaterial(25, new Wood()),
				new CraftingMaterial(25, new Wood()),
            ],
            1,
            ""
        );
    }
}
