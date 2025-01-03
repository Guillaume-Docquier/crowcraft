///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { SigilPick } from "./sigil-pick";
import { UnmarkedRunestone } from "./unmarked-runestone";

export class RunestonePick extends Item {
    constructor() {
        super(
            "runestone pick",
            [Professions.Runemaker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new SigilPick()),
				new CraftingMaterial(1, new UnmarkedRunestone()),
				new CraftingMaterial(5, new EtherealDust()),
            ],
            1,
            "advanced harvesting tools"
        );
    }
}
