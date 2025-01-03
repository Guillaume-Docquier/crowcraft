///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CocoaBeans } from "./cocoa-beans";

export class PreparedCocoaBeans extends Item {
    constructor() {
        super(
            "prepared cocoa beans",
            [Professions.None],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new CocoaBeans()),
            ],
            1,
            "shell cocoa beans"
        );
    }
}
