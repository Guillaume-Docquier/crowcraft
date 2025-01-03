///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ambrosia } from "./ambrosia";
import { ArchitecturalArches } from "./architectural-arches";
import { EtherealDust } from "./ethereal-dust";
import { FoundationSegment } from "./foundation-segment";
import { Frame } from "./frame";
import { Wood } from "./wood";

export class AlchemyThemedStall extends Item {
    constructor() {
        super(
            "alchemy themed stall",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new ArchitecturalArches()),
				new CraftingMaterial(1, new FoundationSegment()),
				new CraftingMaterial(15, new Wood()),
				new CraftingMaterial(2, new Frame()),
				new CraftingMaterial(10, new EtherealDust()),
				new CraftingMaterial(1, new Ambrosia()),
            ],
            1,
            ""
        );
    }
}
