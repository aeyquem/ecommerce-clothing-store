import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverview.container';
import CollectionPageContainer from '../collection-page/CollectionPage.container';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { useEffect } from 'react';

const Shop = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

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

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
}

export default connect(null, mapDispatchToProps)(Shop);