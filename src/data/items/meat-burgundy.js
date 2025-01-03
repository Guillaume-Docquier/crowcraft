///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CrushedHerbs } from "./crushed-herbs";
import { CurrantBerries } from "./currant-berries";
import { Gnocchi } from "./gnocchi";
import { LargeCookingPot } from "./large-cooking-pot";
import { Meat } from "./meat";
import { Produce } from "./produce";
import { RedWine } from "./red-wine";

export class MeatBurgundy extends Item {
    constructor() {
        super(
            "meat burgundy",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new CurrantBerries()),
				new CraftingMaterial(1, new RedWine()),
				new CraftingMaterial(2, new Meat()),
				new CraftingMaterial(1, new Gnocchi()),
				new CraftingMaterial(1, new CrushedHerbs()),
				new CraftingMaterial(1, new Produce()),
            ],
            1,
            ""
        );
    }
}
