///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { SigilShovel } from "./sigil-shovel";
import { UnmarkedRunestone } from "./unmarked-runestone";

export class RunestoneShovel extends Item {
    constructor() {
        super(
            "runestone shovel",
            [Professions.Runemaker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new SigilShovel()),
				new CraftingMaterial(1, new UnmarkedRunestone()),
				new CraftingMaterial(5, new EtherealDust()),
            ],
            1,
            "advanced harvesting tools"
        );
    }
}
