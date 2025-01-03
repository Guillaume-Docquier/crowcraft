///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizedComponent, CraftingMaterial, Rarities, Professions } from "models";
    import { EtherealDust } from "./ethereal-dust";
import { Stone } from "./stone";

    export class UnmarkedStoneRunestone extends CustomizedComponent {
        constructor() {
        super(
            "unmarked stone runestone",
            [Professions.Runemaker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new Stone()),
			new CraftingMaterial(6, new Stone()),
			new CraftingMaterial(6, new Stone()),
			new CraftingMaterial(6, new EtherealDust()),
            ],
            1,
            "unmarked runestone",
            "unmarked runestone"
        );
    }
    }
    