///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Bread } from "./bread";
import { FreshButter } from "./fresh-butter";
import { LargeCookingPot } from "./large-cooking-pot";
import { Meat } from "./meat";
import { MeatOrMushroom } from "./meat-or-mushroom";
import { Mushroom } from "./mushroom";
import { Produce } from "./produce";
import { UrguSpiceMix } from "./urgu-spice-mix";
import { WaterFlask } from "./water-flask";

export class SumptuousPotPie extends CustomizableComponent {
    constructor() {
        super(
            "sumptuous pot pie",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new UrguSpiceMix()),
				new CraftingMaterial(2, new MeatOrMushroom()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(1, new FreshButter()),
				new CraftingMaterial(1, new Bread()),
				new CraftingMaterial(1, new Produce()),
            ],
            1,
            "",
            [
                new MeatSumptuousPotPieCustomization(),
				new MushroomSumptuousPotPieCustomization(),
            ]
        );
    }
}

class MeatSumptuousPotPieCustomization extends Customization {
    constructor() {
        super(
            "meat",
            [
                new Meat(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Meat],
                [Rarities.Uncommon.name]: [ItemsStats.Meat],
                [Rarities.Rare.name]: [ItemsStats.Meat],
                [Rarities.Epic.name]: [ItemsStats.Meat],
                [Rarities.Legendary.name]: [ItemsStats.Meat],
            }
        )
    }
}

class MushroomSumptuousPotPieCustomization extends Customization {
    constructor() {
        super(
            "mushroom",
            [
                new Mushroom(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Mushroom],
                [Rarities.Uncommon.name]: [ItemsStats.Mushroom],
                [Rarities.Rare.name]: [ItemsStats.Mushroom],
                [Rarities.Epic.name]: [ItemsStats.Mushroom],
                [Rarities.Legendary.name]: [ItemsStats.Mushroom],
            }
        )
    }
}
