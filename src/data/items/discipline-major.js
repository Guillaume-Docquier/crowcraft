///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AureliumBar } from "./aurelium-bar";
import { DominationDust } from "./domination-dust";
import { SigilBinding } from "./sigil-binding";
import { SoulGemMajor } from "./soul-gem-major";
import { UnmarkedStoneRunestone } from "./unmarked-stone-runestone";

export class DisciplineMajor extends Item {
    constructor() {
        super(
            "discipline: major",
            [Professions.Runemaker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new SigilBinding()),
				new CraftingMaterial(4, new DominationDust()),
				new CraftingMaterial(1, new UnmarkedStoneRunestone()),
				new CraftingMaterial(1, new AureliumBar()),
				new CraftingMaterial(1, new AureliumBar()),
				new CraftingMaterial(1, new SoulGemMajor()),
            ],
            1,
            ""
        );
    }
}
