import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";

export class WeaponCrossguard extends Item {
    constructor() {
        super(
            "weapon crossguard",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
            ],
            1
        );
    }
}
    