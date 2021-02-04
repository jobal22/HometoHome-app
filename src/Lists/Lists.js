import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList} from '../address-helpers.js'
import AddressCard from '../AddressCard/AddressCard.js';
import './Lists.css';
import { number } from 'prop-types';


export default class List extends Component {
    
    static contextType = HometoHomeContext;
    
    render() {
        const props = this.props
        const listId = props.id
        const {lists=[], addresses=[]} = this.context
        const list = findList (lists, listId) || {}
        const address = addresses.filter(address=>list.gpid == address.gospelpresentation && list.nsid == address.newsalvations);
        // console.log('nownownow', props)
        return (
          <div className='listContainer'>
            <section className='list'>
              <header className='list-header'>
                  <h2>{list.name}</h2>
              </header>

              <div className='addAddresses__button'>
                <button className='addAddresses' type='submit'>
                  <Link  className='addAddressesLink' to={`/admin-add-address`}>Add Addresses</Link>
                </button>
              </div>

              <div className='List-cards'>
                {address.map((address) =>
                  <AddressCard 
                      key={address.id}
                      id={address.id}
                      number={address.number}
                      street={address.street}
                      city={address.city}
                      state={address.state}
                      zip={address.zip}
                      name={address.name}
                      phone={address.phone}
                      gospelpresentation={address.gospelpresentation}
                      newsalvations={address.newsalvations}
                      notes={address.notes}
                  />
                )}
              </div>


            </section>            
          </div>
        )
    }
}