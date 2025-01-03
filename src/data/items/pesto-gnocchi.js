///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { FreshButter } from "./fresh-butter";
import { Gnocchi } from "./gnocchi";
import { LargeCookingPot } from "./large-cooking-pot";
import { Mushroom } from "./mushroom";
import { OliveOil } from "./olive-oil";

export class PestoGnocchi extends Item {
    constructor() {
        super(
            "pesto gnocchi",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new Mushroom()),
				new CraftingMaterial(2, new Gnocchi()),
				new CraftingMaterial(1, new OliveOil()),
				new CraftingMaterial(2, new CrushedHerbs()),
				new CraftingMaterial(1, new FreshButter()),
            ],
            1,
            ""
        );
    }
}
