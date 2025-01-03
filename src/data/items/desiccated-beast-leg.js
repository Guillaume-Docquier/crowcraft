///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Rarities } from "models";
import { DesiccatedLeg } from "./desiccated-leg";

export class DesiccatedBeastLeg extends DesiccatedLeg {
    constructor() {
        super(
            "desiccated beast leg",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
