import React from 'react';
import Addresses from '../Addresses/Addresses.js';
import './List.css';

export default function List(props) {
  console.log('dude check it', props.addresses)
  return (
    <section className='List'>
      <header className='List-header'>
          <h2>{props.name}</h2>
      </header>
      <div className='List-cards'>
        {/* {props.addresses.map((a) =>
          <p>{a.street}{' '}{a.city}{' '}{a.state}{' '}{a.zip}</p>
        )} */}
          {props.addresses.map((address) =>
            <Addresses 
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
          {/* <button
            type='button'
            onClick={()=> props.onClickAdd(props.id)}
          >
            + Add Random Card
          </button> */}
      </div>
    </section>
  );
}

List.defaultProps = {
  onClickAdd:()=>{},
}