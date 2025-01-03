///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { BoneBroth } from "./bone-broth";
import { HotSauce } from "./hot-sauce";
import { LargeCookingPot } from "./large-cooking-pot";
import { Meat } from "./meat";
import { MeatOrMushroom } from "./meat-or-mushroom";
import { Mushroom } from "./mushroom";
import { PasteurizedMilk } from "./pasteurized-milk";
import { PotatoFlour } from "./potato-flour";

export class BiscuitsAndGravy extends CustomizableComponent {
    constructor() {
        super(
            "biscuits and gravy",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new PasteurizedMilk()),
				new CraftingMaterial(1, new MeatOrMushroom()),
				new CraftingMaterial(1, new PotatoFlour()),
				new CraftingMaterial(1, new BoneBroth()),
				new CraftingMaterial(1, new HotSauce()),
            ],
            1,
            "",
            [
                new MeatBiscuitsAndGravyCustomization(),
				new MushroomBiscuitsAndGravyCustomization(),
            ]
        );
    }
}

class MeatBiscuitsAndGravyCustomization extends Customization {
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

class MushroomBiscuitsAndGravyCustomization extends Customization {
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
