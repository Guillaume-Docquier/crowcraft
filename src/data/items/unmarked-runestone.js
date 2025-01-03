///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Stone } from "./stone";
import { Wood } from "./wood";
import { WoodOrStone } from "./wood-or-stone";

export class UnmarkedRunestone extends CustomizableComponent {
    constructor() {
        super(
            "unmarked runestone",
            [Professions.Runemaker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new WoodOrStone()),
				new CraftingMaterial(6, new WoodOrStone()),
				new CraftingMaterial(6, new WoodOrStone()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1,
            "",
            [
                new StoneUnmarkedRunestoneCustomization(),
				new WoodUnmarkedRunestoneCustomization(),
            ]
        );
    }
}

class StoneUnmarkedRunestoneCustomization extends Customization {
    constructor() {
        super(
            "stone",
            [
                new Stone(),
				new Stone(),
				new Stone(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stone],
                [Rarities.Uncommon.name]: [ItemsStats.Stone],
                [Rarities.Rare.name]: [ItemsStats.Stone],
                [Rarities.Epic.name]: [ItemsStats.Stone],
                [Rarities.Legendary.name]: [ItemsStats.Stone],
            }
        )
    }
}

class WoodUnmarkedRunestoneCustomization extends Customization {
    constructor() {
        super(
            "wood",
            [
                new Wood(),
				new Wood(),
				new Wood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Wood],
                [Rarities.Uncommon.name]: [ItemsStats.Wood],
                [Rarities.Rare.name]: [ItemsStats.Wood],
                [Rarities.Epic.name]: [ItemsStats.Wood],
                [Rarities.Legendary.name]: [ItemsStats.Wood],
            }
        )
    }
}
