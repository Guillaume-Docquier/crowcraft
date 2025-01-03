///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ArchitecturalWall } from "./architectural-wall";
import { CarpentryNails } from "./carpentry-nails";
import { EtherealDust } from "./ethereal-dust";
import { FloorTiles } from "./floor-tiles";
import { FoundationSegment } from "./foundation-segment";

export class TrainingCampDeed extends Item {
    constructor() {
        super(
            "training camp deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(4, new FoundationSegment()),
				new CraftingMaterial(35, new EtherealDust()),
				new CraftingMaterial(4, new CarpentryNails()),
				new CraftingMaterial(4, new FloorTiles()),
				new CraftingMaterial(2, new ArchitecturalWall()),
            ],
            1,
            "training camp"
        );
    }
}
