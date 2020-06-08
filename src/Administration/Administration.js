import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import STORE from '../Store/dummy-store';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList, findAddress, getAddressesForList,  getNotesForFolder} from '../address-helpers.js'

import './Administration.css'
import PropTypes from 'prop-types'
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
        // const { listId} = this.props.match.params
        // const list = findList (lists, listId) || {}
        // const address = this.context.addresses.map(address=>lists.gpId == address.gospelPresentation);

        console.log('herehereher', this.context)
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
                        // addresses={list.addressIds.map(id => addresses[id])}
                        // addresses={list.nsId.map(newSalvations => addresses.newSalvations)}
                        // addresses={doneB.map(doneA => doneA)}
                        

                    />
                )}

                {/* {lists.map(list =>
                    <p>{list.name} {list.gpId}</p>)} */}
                {/* {this.props.store.store.lists.map(list => 
                    <List
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        addresses={list.addressIds.map(id => this.props.store.store.addresses[id])}
                    />
                )} */}

            </div>
        )
    }
}
