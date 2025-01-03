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
import { QualityAssuranceControlKit } from "./quality-assurance-control-kit";
import { StoneWallSection } from "./stone-wall-section";

export class StoneWallPanelWindowDeed extends Item {
    constructor() {
        super(
            "stone wall panel: window deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new StoneWallSection()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(2, new CarpentryNails()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
				new CraftingMaterial(1, new ArchitecturalArches()),
            ],
            1,
            "wall panel: window"
        );
    }
}
