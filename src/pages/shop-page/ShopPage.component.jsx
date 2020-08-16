import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import CollectionPage from '../collection-page/CollectionPage.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'


const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const cData = convertCollectionSnapshotToMap(snapshot);
            updateCollections(cData);
            this.setState({ isLoading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={
                        (props) => (
                            <CollectionOverviewSpinner isLoading={isLoading} {...props} />
                        )
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={
                        (props) => (
                            <CollectionPageSpinner isLoading={isLoading} {...props} />
                        )
                    }
                />
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