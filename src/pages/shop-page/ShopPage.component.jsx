import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import CollectionPage from '../collection-page/CollectionPage.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { connect } from 'react-redux';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'

import { selectShopIsFetching } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect';


const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsAsync } = this.props;
        fetchCollectionsAsync();
    }

    render() {
        const { match, selectShopIsFetching } = this.props;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={
                        (props) => (
                            <CollectionOverviewSpinner isLoading={selectShopIsFetching} {...props} />
                        )
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={
                        (props) => (
                            <CollectionPageSpinner isLoading={selectShopIsFetching} {...props} />
                        )
                    }
                />
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    selectShopIsFetching: selectShopIsFetching
})

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);