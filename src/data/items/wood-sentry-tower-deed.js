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
import { WoodWallSection } from "./wood-wall-section";

export class WoodSentryTowerDeed extends Item {
    constructor() {
        super(
            "wood sentry tower deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new WoodWallSection()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(1, new FoundationSegment()),
				new CraftingMaterial(1, new CarpentryNails()),
				new CraftingMaterial(1, new ArchitecturalArches()),
				new CraftingMaterial(2, new RoofSegment()),
				new CraftingMaterial(4, new FloorTiles()),
            ],
            1,
            "sentry tower"
        );
    }
}
