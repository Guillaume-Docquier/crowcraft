///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ChaosEmber } from "./chaos-ember";
import { SigilHaste } from "./sigil-haste";
import { UnmarkedStoneRunestone } from "./unmarked-stone-runestone";

export class RunestoneHaste extends Item {
    constructor() {
        super(
            "runestone: haste",
            [Professions.Runemaker],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new SigilHaste()),
				new CraftingMaterial(1, new UnmarkedStoneRunestone()),
				new CraftingMaterial(1, new ChaosEmber()),
            ],
            1,
            ""
        );
    }
}
