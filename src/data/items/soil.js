///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Gravel } from "./gravel";
import { Mulch } from "./mulch";
import { OreConcentrate } from "./ore-concentrate";

export class Soil extends Item {
    constructor() {
        super(
            "soil",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(8, new Gravel()),
				new CraftingMaterial(8, new Mulch()),
				new CraftingMaterial(8, new OreConcentrate()),
            ],
            1,
            ""
        );
    }
}
