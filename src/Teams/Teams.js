import React from 'react';
import {Link} from 'react-router-dom'
import AddressCard from '../AddressCard/AddressCard.js';
import './Teams.css';

export default function Teams(props) {
  console.log('for Teams', props)
  return (
    <section className='Teams'>
      <header className='Teams-header'>
          <h2>{props.name}</h2>
      </header>

      {/* <div className='AddCatalog__button'>
        <button type='submit'>
          <Link to={`/add-address`}>Add Addresses</Link>
        </button>
      </div> */}


      <div className='Teams-cards'>
        {/* {props.addresses.map((a) =>
          <p>{a.street}{' '}{a.city}{' '}{a.state}{' '}{a.zip}</p>
        )} */}
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
                gospelPresentation={address.gospelPresentation}
                new-Salvations={address.newSalvations}
                notes={address.notes}

            />
           )}
           {/* {props.addresses.map((a)=><p>{a.street}</p>)} */}
          {/* <button
            type='button'
            onClick={()=> props.onClickAdd(props.id)}
          >
            + Add Random Card
          </button> */}
          {/* <div className='AddCatalog__button'>
            <button type='submit'>
              <Link to={`/add-address`}>Add Addresses</Link>
            </button>
          </div> */}

      </div>
    </section>
  );
}

Teams.defaultProps = {
  onClickAdd:()=>{},
}