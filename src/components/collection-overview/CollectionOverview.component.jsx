import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/CollectionPreview.component'

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
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
