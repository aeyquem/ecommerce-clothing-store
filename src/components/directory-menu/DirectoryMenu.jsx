import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import './directoryMenu.styles.scss'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

const DirectoryMenu = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => {
                    return <MenuItem key={id} {...otherSectionProps} />
                })
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
