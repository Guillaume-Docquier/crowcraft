///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutGem } from "./cut-gem";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughRuby } from "./rough-ruby";
import { WaterFlask } from "./water-flask";

export class RoundCutRuby extends CutGem {
    constructor() {
        super(
            "round cut ruby",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughRuby()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: round"
        );
    }
}