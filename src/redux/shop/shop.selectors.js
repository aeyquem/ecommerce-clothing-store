import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => {
        return shop.collections
    }
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => {
        return collections ?
            Object.keys(collections).map(key => collections[key]) :
            []
    }
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => {
        return collections ?
            collections[collectionUrlParam] :
            null;
    }
)

export const selectShopIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);