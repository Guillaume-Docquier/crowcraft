///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Ore } from "./ore";
import { Stone } from "./stone";
import { Wood } from "./wood";

export class CraftingStationStonemasonryStall extends Item {
    constructor() {
        super(
            "crafting station: stonemasonry stall",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(15, new EtherealDust()),
				new CraftingMaterial(18, new Ore()),
				new CraftingMaterial(18, new Wood()),
				new CraftingMaterial(18, new Stone()),
				new CraftingMaterial(18, new Wood()),
				new CraftingMaterial(18, new Stone()),
				new CraftingMaterial(18, new Ore()),
            ],
            1,
            "crafting station: stonemasonry"
        );
    }
}
