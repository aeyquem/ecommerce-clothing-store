import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverview.container';
import CollectionPageContainer from '../collection-page/CollectionPage.container';

import { connect } from 'react-redux';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'

class Shop extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsAsync } = this.props;
        fetchCollectionsAsync();
    }

    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
    }
}

export default connect(null, mapDispatchToProps)(Shop);