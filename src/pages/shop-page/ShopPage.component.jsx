import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import CollectionPage from '../collection-page/CollectionPage.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'


class Shop extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const cData = convertCollectionSnapshotToMap(snapshot);
            updateCollections(cData);
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(null, mapDispatchToProps)(Shop);