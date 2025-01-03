///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ArchitecturalArches } from "./architectural-arches";
import { CarpentryNails } from "./carpentry-nails";
import { EtherealDust } from "./ethereal-dust";
import { FloorTiles } from "./floor-tiles";
import { FoundationSegment } from "./foundation-segment";
import { WoodWallSection } from "./wood-wall-section";

export class WoodWall2x1Deed extends Item {
    constructor() {
        super(
            "wood wall 2x1 deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new WoodWallSection()),
				new CraftingMaterial(2, new FloorTiles()),
				new CraftingMaterial(1, new CarpentryNails()),
				new CraftingMaterial(2, new FoundationSegment()),
				new CraftingMaterial(2, new ArchitecturalArches()),
				new CraftingMaterial(5, new EtherealDust()),
            ],
            1,
            "wall 2x1"
        );
    }
}
