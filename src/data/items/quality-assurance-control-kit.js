///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Hide } from "./hide";
import { Ore } from "./ore";
import { Stone } from "./stone";
import { Wood } from "./wood";

export class QualityAssuranceControlKit extends Item {
    constructor() {
        super(
            "quality assurance control kit",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(15, new EtherealDust()),
				new CraftingMaterial(25, new Ore()),
				new CraftingMaterial(25, new Wood()),
				new CraftingMaterial(25, new Hide()),
				new CraftingMaterial(25, new Stone()),
            ],
            1,
            ""
        );
    }
}
