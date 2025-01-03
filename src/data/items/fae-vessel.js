///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PhilosophersStone } from "./philosophers-stone";
import { RestoredElvenArm } from "./restored-elven-arm";
import { RestoredElvenHead } from "./restored-elven-head";
import { RestoredElvenLeg } from "./restored-elven-leg";
import { RestoredElvenTorso } from "./restored-elven-torso";

export class FaeVessel extends Item {
    constructor() {
        super(
            "fae vessel",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RestoredElvenHead()),
				new CraftingMaterial(1, new RestoredElvenArm()),
				new CraftingMaterial(1, new RestoredElvenArm()),
				new CraftingMaterial(1, new RestoredElvenLeg()),
				new CraftingMaterial(1, new RestoredElvenLeg()),
				new CraftingMaterial(1, new RestoredElvenTorso()),
				new CraftingMaterial(75, new EtherealDust()),
				new CraftingMaterial(1, new PhilosophersStone()),
            ],
            1,
            ""
        );
    }
}
