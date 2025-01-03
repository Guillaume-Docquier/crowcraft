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
import { RoofSegment } from "./roof-segment";
import { StoneWallSection } from "./stone-wall-section";

export class StoneSquareTowerDeed extends Item {
    constructor() {
        super(
            "stone square tower deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new StoneWallSection()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
				new CraftingMaterial(4, new FoundationSegment()),
				new CraftingMaterial(4, new CarpentryNails()),
				new CraftingMaterial(4, new ArchitecturalArches()),
				new CraftingMaterial(6, new RoofSegment()),
				new CraftingMaterial(4, new FloorTiles()),
				new CraftingMaterial(5, new EtherealDust()),
            ],
            1,
            "square tower"
        );
    }
}
