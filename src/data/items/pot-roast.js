///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BoneBroth } from "./bone-broth";
import { CrushedHerbs } from "./crushed-herbs";
import { Gnocchi } from "./gnocchi";
import { LargeCookingPot } from "./large-cooking-pot";
import { Meat } from "./meat";
import { SatyrSaltCube } from "./satyr-salt-cube";

export class PotRoast extends Item {
    constructor() {
        super(
            "pot roast",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new BoneBroth()),
				new CraftingMaterial(2, new Meat()),
				new CraftingMaterial(1, new Gnocchi()),
				new CraftingMaterial(1, new SatyrSaltCube()),
				new CraftingMaterial(1, new CrushedHerbs()),
            ],
            1,
            ""
        );
    }
}
