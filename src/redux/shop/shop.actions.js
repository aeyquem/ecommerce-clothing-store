import ShopActionsTypes from './shop.types'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'


export const updateCollections = (collectionsMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => {
    return {
        type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
}

export const fetchCollectionsFailure = errorMessage => {
    return {
        type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionsAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart());
        const collectionRef = firestore.collection('collections');

        collectionRef.get()
            .then(async snapshot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}