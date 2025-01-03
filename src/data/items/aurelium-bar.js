///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizedComponent, CraftingMaterial, Rarities, Professions } from "models";
    import { Aurelium } from "./aurelium";
import { Coal } from "./coal";

    export class AureliumBar extends CustomizedComponent {
        constructor() {
        super(
            "aurelium bar",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(9, new Aurelium()),
			new CraftingMaterial(9, new Aurelium()),
			new CraftingMaterial(9, new Aurelium()),
			new CraftingMaterial(6, new Coal()),
            ],
            1,
            "metal bar",
            "metal bar"
        );
    }
    }
    