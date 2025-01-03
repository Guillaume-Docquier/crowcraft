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

export class ArchersTowerDeed extends Item {
    constructor() {
        super(
            "archer's tower deed",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(4, new WoodWallSection()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(3, new FoundationSegment()),
				new CraftingMaterial(2, new CarpentryNails()),
				new CraftingMaterial(2, new ArchitecturalArches()),
				new CraftingMaterial(2, new RoofSegment()),
				new CraftingMaterial(4, new FloorTiles()),
            ],
            1,
            "archer's tower"
        );
    }
}
