import "./Item.css";

import { getAsset } from "data";
import { String } from "utils";

export const Item = ({ item, quantity = null }) => {
    const itemName = String.capitalize(item.name);
    const itemTitle = quantity ? `${quantity.toLocaleString()} ${itemName}` : itemName;
    let quantityString = quantity;

    if (quantity > 1_000_000) {
        quantityString = stringifyNumber(quantity, 1_000_000, "M");
    }
    else if (quantity > 10_000) {
        quantityString = stringifyNumber(quantity, 1_000, "K");
    }

    return (
        <div className={`resource-container bg-rarity-${item.rarity.name} | relative w-100 h-100`} title={itemTitle}>
            <img src={getAsset(item.assetId)} alt={itemName} className="resource-image" />
            <div className="resource-count | absolute cursor-default">{quantityString}</div>
        </div>
    )
};

const stringifyNumber = (number, unit, symbol) => {
    const shortNumber = number / unit;
    const decimals = Math.round(shortNumber) === shortNumber ? 0 : 1;

    return `${shortNumber.toFixed(decimals)}${symbol}`;
}