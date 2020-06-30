import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => {
        return shop.collections
    }
)

// export const selectCollectionsForPreview = createSelector(
//     [selectShopCollections],
// )

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => {
        return collections[collectionUrlParam]
    }
)