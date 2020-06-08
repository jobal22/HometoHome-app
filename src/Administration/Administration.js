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
            <div>
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                {lists.map(list => 
                    <Lists
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        addresses={addresses.filter(address => 
                            address.gospelpresentation === list.gpid 
                            && address.newsalvations === list.nsid)}
                    />
                )}
            </div>
        )
    }
}
