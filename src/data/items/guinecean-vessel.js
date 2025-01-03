///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PhilosophersStone } from "./philosophers-stone";
import { RestoredGuineceanArm } from "./restored-guinecean-arm";
import { RestoredGuineceanHead } from "./restored-guinecean-head";
import { RestoredGuineceanLeg } from "./restored-guinecean-leg";
import { RestoredGuineceanTorso } from "./restored-guinecean-torso";

export class GuineceanVessel extends Item {
    constructor() {
        super(
            "guinecean vessel",
            [Professions.Necromancer],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RestoredGuineceanHead()),
				new CraftingMaterial(1, new RestoredGuineceanArm()),
				new CraftingMaterial(1, new RestoredGuineceanArm()),
				new CraftingMaterial(1, new RestoredGuineceanLeg()),
				new CraftingMaterial(1, new RestoredGuineceanLeg()),
				new CraftingMaterial(1, new RestoredGuineceanTorso()),
				new CraftingMaterial(75, new EtherealDust()),
				new CraftingMaterial(1, new PhilosophersStone()),
            ],
            1,
            ""
        );
    }
}
