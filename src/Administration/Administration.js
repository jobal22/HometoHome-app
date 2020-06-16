import React, { Component } from 'react'
import HometoHomeContext from '../Context/HometoHomeContext'
import './Administration.css'
import Lists from '../Lists/Lists.js';

export default class Administration extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = HometoHomeContext;

    render() {
        const {addresses=[], lists=[]} = this.context
        return (
            <div className="Administration">
                <div className="adminPage">
                    {lists.map(list =>
                    <div className = 'adminList'>
                        <Lists
                            key={list.id}
                            id={list.id}
                            name={list.name}
                            gpid={list.gpid}
                            nsid={list.nsid}
                            addresses={addresses.filter(address => 
                                address.gospelpresentation === list.gpid 
                                && address.newsalvations === list.nsid)}
                        />
                    </div >
                    )}
                </div>
            </div>
        )
    }
}
