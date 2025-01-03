///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { FloorTiles } from "./floor-tiles";
import { FoundationSegment } from "./foundation-segment";
import { QualityAssuranceControlKit } from "./quality-assurance-control-kit";

export class StoneAttachableRampartDeed extends Item {
    constructor() {
        super(
            "stone attachable rampart deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(4, new FoundationSegment()),
				new CraftingMaterial(3, new FloorTiles()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
            ],
            1,
            "rampart"
        );
    }
}
