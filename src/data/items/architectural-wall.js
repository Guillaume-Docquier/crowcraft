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
import { WallInsulation } from "./wall-insulation";

export class ArchitecturalWall extends Item {
    constructor() {
        super(
            "architectural wall",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Bricks()),
				new CraftingMaterial(4, new Frame()),
				new CraftingMaterial(2, new WallInsulation()),
				new CraftingMaterial(1, new CarpentryNails()),
            ],
            1,
            ""
        );
    }
}
