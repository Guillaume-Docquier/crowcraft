///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AnimalBlood } from "./animal-blood";
import { EtherealDust } from "./ethereal-dust";
import { ParchmentPaper } from "./parchment-paper";
import { Silver } from "./silver";
import { SoulEssence } from "./soul-essence";

export class SigilBinding extends Item {
    constructor() {
        super(
            "sigil: binding",
            [Professions.Runemaker],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new ParchmentPaper()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(2, new Silver()),
				new CraftingMaterial(2, new SoulEssence()),
				new CraftingMaterial(2, new AnimalBlood()),
            ],
            1,
            ""
        );
    }
}
