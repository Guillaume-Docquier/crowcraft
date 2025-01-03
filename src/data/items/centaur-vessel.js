///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PhilosophersStone } from "./philosophers-stone";
import { RestoredCentaurBody } from "./restored-centaur-body";
import { RestoredHumanArm } from "./restored-human-arm";
import { RestoredHumanHead } from "./restored-human-head";
import { RestoredHumanTorso } from "./restored-human-torso";

export class CentaurVessel extends Item {
    constructor() {
        super(
            "centaur vessel",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RestoredHumanHead()),
				new CraftingMaterial(1, new RestoredHumanArm()),
				new CraftingMaterial(1, new RestoredHumanArm()),
				new CraftingMaterial(1, new RestoredCentaurBody()),
				new CraftingMaterial(1, new RestoredHumanTorso()),
				new CraftingMaterial(75, new EtherealDust()),
				new CraftingMaterial(1, new PhilosophersStone()),
            ],
            1,
            ""
        );
    }
}
