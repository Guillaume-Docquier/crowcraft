///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ArchitecturalArches } from "./architectural-arches";
import { ArchitecturalWall } from "./architectural-wall";
import { CarpentryNails } from "./carpentry-nails";
import { ChaosEmber } from "./chaos-ember";
import { FloorTiles } from "./floor-tiles";
import { FoundationSegment } from "./foundation-segment";
import { RoofSegment } from "./roof-segment";
import { VillaDeed } from "./villa-deed";

export class ThroneLodgeDeed extends Item {
    constructor() {
        super(
            "throne lodge deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(16, new FloorTiles()),
				new CraftingMaterial(16, new ArchitecturalArches()),
				new CraftingMaterial(16, new ArchitecturalWall()),
				new CraftingMaterial(16, new RoofSegment()),
				new CraftingMaterial(12, new CarpentryNails()),
				new CraftingMaterial(16, new FoundationSegment()),
				new CraftingMaterial(6, new ChaosEmber()),
				new CraftingMaterial(1, new VillaDeed()),
            ],
            1,
            "throne lodge"
        );
    }
}
