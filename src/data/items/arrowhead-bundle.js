///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Aurelium } from "./aurelium";
import { Coal } from "./coal";
import { Copper } from "./copper";
import { Iron } from "./iron";
import { Ore } from "./ore";
import { Silver } from "./silver";
import { Tin } from "./tin";

export class ArrowheadBundle extends CustomizableComponent {
    constructor() {
        super(
            "arrowhead bundle",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(1, new Coal()),
            ],
            1,
            "",
            [
                new PiercingArrowheadBundleCustomization(),
				new SlashingArrowheadBundleCustomization(),
				new CrushingArrowheadBundleCustomization(),
				new FireArrowheadBundleCustomization(),
				new IceArrowheadBundleCustomization(),
            ]
        );
    }
}

class PiercingArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "piercing",
            [
                new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingDamage],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingDamage],
                [Rarities.Rare.name]: [ItemsStats.PiercingDamage],
                [Rarities.Epic.name]: [ItemsStats.PiercingDamage],
                [Rarities.Legendary.name]: [ItemsStats.PiercingDamage],
            }
        )
    }
}

class SlashingArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "slashing",
            [
                new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingDamage],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingDamage],
                [Rarities.Rare.name]: [ItemsStats.SlashingDamage],
                [Rarities.Epic.name]: [ItemsStats.SlashingDamage],
                [Rarities.Legendary.name]: [ItemsStats.SlashingDamage],
            }
        )
    }
}

class CrushingArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "crushing",
            [
                new Copper(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingDamage],
                [Rarities.Rare.name]: [ItemsStats.CrushingDamage],
                [Rarities.Epic.name]: [ItemsStats.CrushingDamage],
                [Rarities.Legendary.name]: [ItemsStats.CrushingDamage],
            }
        )
    }
}

class FireArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "fire",
            [
                new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireDamage],
                [Rarities.Uncommon.name]: [ItemsStats.FireDamage],
                [Rarities.Rare.name]: [ItemsStats.FireDamage],
                [Rarities.Epic.name]: [ItemsStats.FireDamage],
                [Rarities.Legendary.name]: [ItemsStats.FireDamage],
            }
        )
    }
}

class IceArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "ice",
            [
                new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceDamage],
                [Rarities.Uncommon.name]: [ItemsStats.IceDamage],
                [Rarities.Rare.name]: [ItemsStats.IceDamage],
                [Rarities.Epic.name]: [ItemsStats.IceDamage],
                [Rarities.Legendary.name]: [ItemsStats.IceDamage],
            }
        )
    }
}
