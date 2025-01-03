///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Aurelium } from "./aurelium";
import { Copper } from "./copper";
import { Iron } from "./iron";
import { Ore } from "./ore";
import { ParchmentPaper } from "./parchment-paper";
import { Silver } from "./silver";
import { Tin } from "./tin";

export class SigilPick extends CustomizableComponent {
    constructor() {
        super(
            "sigil: pick",
            [Professions.Runemaker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new ParchmentPaper()),
				new CraftingMaterial(8, new Ore()),
				new CraftingMaterial(8, new Ore()),
            ],
            1,
            "",
            [
                new BeneficialHarvestChanceSigilPickCustomization(),
				new HarvestCriticalChanceSigilPickCustomization(),
				new PlethoraOfDustSigilPickCustomization(),
				new GemHarvestChanceSigilPickCustomization(),
            ]
        );
    }
}

class BeneficialHarvestChanceSigilPickCustomization extends Customization {
    constructor() {
        super(
            "beneficial harvest chance",
            [
                new Copper(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BeneficialHarvestChance],
                [Rarities.Uncommon.name]: [ItemsStats.BeneficialHarvestChance],
                [Rarities.Rare.name]: [ItemsStats.BeneficialHarvestChance],
                [Rarities.Epic.name]: [ItemsStats.BeneficialHarvestChance],
                [Rarities.Legendary.name]: [ItemsStats.BeneficialHarvestChance],
            }
        )
    }
}

class HarvestCriticalChanceSigilPickCustomization extends Customization {
    constructor() {
        super(
            "harvest critical chance",
            [
                new Silver(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestCriticalChance],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestCriticalChance],
                [Rarities.Rare.name]: [ItemsStats.HarvestCriticalChance],
                [Rarities.Epic.name]: [ItemsStats.HarvestCriticalChance],
                [Rarities.Legendary.name]: [ItemsStats.HarvestCriticalChance],
            }
        )
    }
}

class PlethoraOfDustSigilPickCustomization extends Customization {
    constructor() {
        super(
            "plethora of dust",
            [
                new Iron(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PlethoraOfDust],
                [Rarities.Uncommon.name]: [ItemsStats.PlethoraOfDust],
                [Rarities.Rare.name]: [ItemsStats.PlethoraOfDust],
                [Rarities.Epic.name]: [ItemsStats.PlethoraOfDust],
                [Rarities.Legendary.name]: [ItemsStats.PlethoraOfDust],
            }
        )
    }
}

class GemHarvestChanceSigilPickCustomization extends Customization {
    constructor() {
        super(
            "gem harvest chance",
            [
                new Copper(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.GemHarvestChance],
                [Rarities.Uncommon.name]: [ItemsStats.GemHarvestChance],
                [Rarities.Rare.name]: [ItemsStats.GemHarvestChance],
                [Rarities.Epic.name]: [ItemsStats.GemHarvestChance],
                [Rarities.Legendary.name]: [ItemsStats.GemHarvestChance],
            }
        )
    }
}
