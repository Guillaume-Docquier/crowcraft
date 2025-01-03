///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Bricks } from "./bricks";
import { CarpentryNails } from "./carpentry-nails";
import { Frame } from "./frame";

export class ArchitecturalArches extends Item {
    constructor() {
        super(
            "architectural arches",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Bricks()),
				new CraftingMaterial(2, new Frame()),
				new CraftingMaterial(1, new CarpentryNails()),
            ],
            1,
            ""
        );
    }
}
