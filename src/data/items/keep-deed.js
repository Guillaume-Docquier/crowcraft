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
import { ThroneLodgeDeed } from "./throne-lodge-deed";

export class KeepDeed extends Item {
    constructor() {
        super(
            "keep deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(20, new FloorTiles()),
				new CraftingMaterial(20, new ArchitecturalArches()),
				new CraftingMaterial(12, new ArchitecturalWall()),
				new CraftingMaterial(2, new RoofSegment()),
				new CraftingMaterial(14, new CarpentryNails()),
				new CraftingMaterial(20, new FoundationSegment()),
				new CraftingMaterial(10, new ChaosEmber()),
				new CraftingMaterial(1, new ThroneLodgeDeed()),
            ],
            1,
            "keep"
        );
    }
}
