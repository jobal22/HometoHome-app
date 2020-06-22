import React from 'react';
import {Link} from 'react-router-dom'
import AddressCard from '../AddressCard/AddressCard.js';
import './Lists.css';

export default function List(props) {
  return (
    <div className='listContainer'>
    <section className='list'>
      <header className='list-header'>
          <h2>{props.name}</h2>
      </header>


      <div className='addAddresses__button'>
        <button className='addAddresses' type='submit'>
          <Link  className='addAddressesLink' to={`/admin-add-address`}>Add Addresses</Link>
        </button>
      </div>


      <div className='List-cards'>
          {props.addresses.map((address) =>
            <AddressCard 
                key={address.id}
                id={address.id}
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
    </section></div>
  );
}

List.defaultProps = {
  onClickAdd:()=>{},
}