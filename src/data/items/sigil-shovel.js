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

export class SigilShovel extends CustomizableComponent {
    constructor() {
        super(
            "sigil: shovel",
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
                new BeneficialHarvestChanceSigilShovelCustomization(),
				new HarvestCriticalChanceSigilShovelCustomization(),
				new PlethoraOfDustSigilShovelCustomization(),
				new GraveGoodsSigilShovelCustomization(),
            ]
        );
    }
}

class BeneficialHarvestChanceSigilShovelCustomization extends Customization {
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

class HarvestCriticalChanceSigilShovelCustomization extends Customization {
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

class PlethoraOfDustSigilShovelCustomization extends Customization {
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

class GraveGoodsSigilShovelCustomization extends Customization {
    constructor() {
        super(
            "grave goods",
            [
                new Copper(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.GraveGoods],
                [Rarities.Uncommon.name]: [ItemsStats.GraveGoods],
                [Rarities.Rare.name]: [ItemsStats.GraveGoods],
                [Rarities.Epic.name]: [ItemsStats.GraveGoods],
                [Rarities.Legendary.name]: [ItemsStats.GraveGoods],
            }
        )
    }
}
