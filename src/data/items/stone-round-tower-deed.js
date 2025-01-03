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
import { RoofSegment } from "./roof-segment";
import { StoneWallSection } from "./stone-wall-section";

export class StoneRoundTowerDeed extends Item {
    constructor() {
        super(
            "stone round tower deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(14, new StoneWallSection()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(6, new FoundationSegment()),
				new CraftingMaterial(8, new CarpentryNails()),
				new CraftingMaterial(6, new ArchitecturalArches()),
				new CraftingMaterial(8, new RoofSegment()),
				new CraftingMaterial(6, new FloorTiles()),
            ],
            1,
            "round tower"
        );
    }
}
