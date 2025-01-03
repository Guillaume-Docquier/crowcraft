///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { FoundationSegment } from "./foundation-segment";
import { QualityAssuranceControlKit } from "./quality-assurance-control-kit";
import { WoodStakes } from "./wood-stakes";

export class StoneAttachableStandingBannerDeed extends Item {
    constructor() {
        super(
            "stone attachable standing banner deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new FoundationSegment()),
				new CraftingMaterial(2, new WoodStakes()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
            ],
            1,
            "standing banner"
        );
    }
}
