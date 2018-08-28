import loadAllItems from '../database/shopStoreItems';

const initShopItems = loadAllItems();

const shopItems = (state = initShopItems, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return action.data;
    }
    return state;
};
export default shopItems;