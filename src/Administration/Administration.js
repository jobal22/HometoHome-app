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

        // const doneL = lists.map(list => list.gpId)
        // const doneB = Array.from(doneL)
        // const doneA = addresses.map(address => address.gospelPresentation)
        // const really = addresses.map(a=>doneA === doneB)
        // const dan = getNotesForFolder (addresses, doneL) || {}
        // const moe = lists.map(l => l.addressIds)
        // const poe = moe.map(id => addresses[id])
        // const ollie = lists.map(list => (list.addressIds.map(id => addresses[id])))
        // const elijah = lists.map(list => (list.addressIds))
        // const nova = lists.map(list => (list.nsId))

        // const gpId = lists.map(l => l.gpId)
        // const nsId = lists.map(l => l.nsId)

        // const map = lists.map((r, index)=> { console.log(index); return r.gpId + index})
        // const o = lists.map(id => lists[id])

        // const findList = (lists, lId) => lists.find(r => r.id == lId)
        // const red = findList (lists, lId) || {}
        // const zz = addresses.filter(address=> address.gospelPresentation)
        // const dd = lists.filter(address=>gpId == address.gospelPresentation)


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
                            address.gospelPresentation === list.gpId 
                            && address.newSalvations === list.nsId)}
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
