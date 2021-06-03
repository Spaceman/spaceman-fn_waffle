"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_STOCK_PINK {
    static onLoadMod() {
        const itemId = "P90_STOCK_PINK";
        const itemClone = "5cc700b9e4a949000f0f0f25";
        const itemCategory = "5b5f757486f774093e6cb507";
        const itemPrefabPath = "P90_STOCK_PINK.bundle";
        const itemLongName = "Pink FN P90 stock";
        const itemFleaPrice = 3500;
        const itemShortName = "P90 stock";
        const itemDescription = "A pink variant of the regular polymer P90 stock produced by Fabrique Nationale Herstal.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("5cc82d76e24e8d00134b4b83", itemId, SpaceApi.FindSlotIndex("5cc82d76e24e8d00134b4b83", "mod_stock"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_STOCK_PINK;