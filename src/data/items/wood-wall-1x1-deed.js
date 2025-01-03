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
import { QualityAssuranceControlKit } from "./quality-assurance-control-kit";
import { WoodWallSection } from "./wood-wall-section";

export class WoodWall1x1Deed extends Item {
    constructor() {
        super(
            "wood wall 1x1 deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new WoodWallSection()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(1, new FloorTiles()),
				new CraftingMaterial(1, new CarpentryNails()),
				new CraftingMaterial(2, new FoundationSegment()),
				new CraftingMaterial(1, new ArchitecturalArches()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
            ],
            1,
            "wall 1x1"
        );
    }
}
