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

export class CottageDeed extends Item {
    constructor() {
        super(
            "cottage deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new ChaosEmber()),
				new CraftingMaterial(8, new ArchitecturalWall()),
				new CraftingMaterial(8, new FoundationSegment()),
				new CraftingMaterial(4, new CarpentryNails()),
				new CraftingMaterial(8, new FloorTiles()),
				new CraftingMaterial(8, new RoofSegment()),
				new CraftingMaterial(8, new ArchitecturalArches()),
            ],
            1,
            "cottage"
        );
    }
}
