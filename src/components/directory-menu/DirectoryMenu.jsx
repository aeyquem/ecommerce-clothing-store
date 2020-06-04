import React, { Component } from 'react'
import MenuItem from '../menu-item/MenuItem'
import './directoryMenu.styles.scss'
import SECTIONS_DATA from './sections.data.js'

export class DirectoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => {
                        return <MenuItem key={id} {...otherSectionProps} />
                    })
                }
            </div>
        )
    }
}

export default DirectoryMenu
