import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectShopIsFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './CollectionOverview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectShopIsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;