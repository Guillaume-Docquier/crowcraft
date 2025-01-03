///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Rarities } from "models";
import { DesiccatedLeg } from "./desiccated-leg";

export class DesiccatedHumanLeg extends DesiccatedLeg {
    constructor() {
        super(
            "desiccated human leg",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
