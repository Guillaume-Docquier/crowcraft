///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AnimalBlood } from "./animal-blood";
import { Aurelium } from "./aurelium";
import { GroundSulphur } from "./ground-sulphur";
import { ParchmentPaper } from "./parchment-paper";
import { SoulEssence } from "./soul-essence";

export class SigilHaste extends Item {
    constructor() {
        super(
            "sigil: haste",
            [Professions.Runemaker],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new ParchmentPaper()),
				new CraftingMaterial(8, new GroundSulphur()),
				new CraftingMaterial(8, new GroundSulphur()),
				new CraftingMaterial(5, new Aurelium()),
				new CraftingMaterial(5, new SoulEssence()),
				new CraftingMaterial(5, new AnimalBlood()),
            ],
            1,
            ""
        );
    }
}
