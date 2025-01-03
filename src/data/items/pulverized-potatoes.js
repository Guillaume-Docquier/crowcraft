///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Potato } from "./potato";

export class PulverizedPotatoes extends Item {
    constructor() {
        super(
            "pulverized potatoes",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Potato()),
            ],
            1,
            "grind food items"
        );
    }
}
