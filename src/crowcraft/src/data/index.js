import { String } from "utils";

const items = [];
const itemsContext = require.context("./items", false, /^(?!.*index).*\.js$/);
for (const itemFileName of itemsContext.keys()) {
    let itemId = itemFileName
        .match(/\/([0-9a-zA-Z-]*)\.js$/)[1]
        .split("-")
        .map(String.capitalize)
        .join("");

    items.push(itemsContext(itemFileName)[itemId]);
}

export { items };

const assets = {};
const assetsContext = require.context("./assets", false, /\.svg$/);
for (const assetFileName of assetsContext.keys()) {
    const assetId = assetFileName.match(/\.\/([0-9a-zA-Z]*)\.svg$/)[1];
    assets[assetId] = assetsContext(assetFileName).default;
}

export const getAsset = assetId => {
    const assetName = String.decapitalize(assetId.replace("'", "").split(" ").map(String.capitalize).join(""));
    let asset = assets[assetName];
    if (!asset) {
        console.error(`Could not find asset '${assetName}' for '${assetId}'`);
        asset = "";
    }

    return asset;
};
