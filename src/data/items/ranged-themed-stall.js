///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ArchitecturalArches } from "./architectural-arches";
import { EtherealDust } from "./ethereal-dust";
import { FoundationSegment } from "./foundation-segment";
import { Frame } from "./frame";
import { RangedWeapon } from "./ranged-weapon";
import { Wood } from "./wood";

export class RangedThemedStall extends Item {
    constructor() {
        super(
            "ranged themed stall",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new ArchitecturalArches()),
				new CraftingMaterial(1, new FoundationSegment()),
				new CraftingMaterial(15, new Wood()),
				new CraftingMaterial(2, new Frame()),
				new CraftingMaterial(10, new EtherealDust()),
				new CraftingMaterial(1, new RangedWeapon()),
            ],
            1,
            ""
        );
    }
}
