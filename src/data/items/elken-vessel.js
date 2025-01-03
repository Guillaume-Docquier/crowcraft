///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PhilosophersStone } from "./philosophers-stone";
import { RestoredBeastLeg } from "./restored-beast-leg";
import { RestoredElkenHead } from "./restored-elken-head";
import { RestoredHumanArm } from "./restored-human-arm";
import { RestoredHumanTorso } from "./restored-human-torso";

export class ElkenVessel extends Item {
    constructor() {
        super(
            "elken vessel",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RestoredElkenHead()),
				new CraftingMaterial(1, new RestoredHumanArm()),
				new CraftingMaterial(1, new RestoredHumanArm()),
				new CraftingMaterial(1, new RestoredBeastLeg()),
				new CraftingMaterial(1, new RestoredBeastLeg()),
				new CraftingMaterial(1, new RestoredHumanTorso()),
				new CraftingMaterial(75, new EtherealDust()),
				new CraftingMaterial(1, new PhilosophersStone()),
            ],
            1,
            ""
        );
    }
}
