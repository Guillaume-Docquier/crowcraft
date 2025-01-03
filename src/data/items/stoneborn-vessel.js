///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PhilosophersStone } from "./philosophers-stone";
import { RestoredStonebornArm } from "./restored-stoneborn-arm";
import { RestoredStonebornHead } from "./restored-stoneborn-head";
import { RestoredStonebornLeg } from "./restored-stoneborn-leg";
import { RestoredStonebornTorso } from "./restored-stoneborn-torso";

export class StonebornVessel extends Item {
    constructor() {
        super(
            "stoneborn vessel",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RestoredStonebornHead()),
				new CraftingMaterial(1, new RestoredStonebornArm()),
				new CraftingMaterial(1, new RestoredStonebornArm()),
				new CraftingMaterial(1, new RestoredStonebornLeg()),
				new CraftingMaterial(1, new RestoredStonebornLeg()),
				new CraftingMaterial(1, new RestoredStonebornTorso()),
				new CraftingMaterial(75, new EtherealDust()),
				new CraftingMaterial(1, new PhilosophersStone()),
            ],
            1,
            ""
        );
    }
}
