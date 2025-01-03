///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Rarities } from "models";
import { DesiccatedArm } from "./desiccated-arm";

export class DesiccatedHumanArm extends DesiccatedArm {
    constructor() {
        super(
            "desiccated human arm",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
