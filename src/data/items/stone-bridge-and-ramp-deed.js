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
import { StoneWallSection } from "./stone-wall-section";

export class StoneBridgeAndRampDeed extends Item {
    constructor() {
        super(
            "stone bridge and ramp deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new StoneWallSection()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(2, new FloorTiles()),
				new CraftingMaterial(1, new CarpentryNails()),
				new CraftingMaterial(3, new FoundationSegment()),
				new CraftingMaterial(2, new ArchitecturalArches()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
            ],
            1,
            "bridge and ramp"
        );
    }
}
