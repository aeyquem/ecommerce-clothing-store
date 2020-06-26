import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.jsx'

const CollectionOverview = ({ collections }) => {
    return (
        <div>
            {
                collections.map(({ id, ...props }) => (
                    <CollectionPreview key={id} {...props} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);
