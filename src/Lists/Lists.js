import React from 'react';
import {Link} from 'react-router-dom'
import AddressCard from '../AddressCard/AddressCard.js';
import DeleteAddress from '../DeleteAddress/DeleteAddress.js';
import './Lists.css';

export default function List(props) {
  
  console.log('dude check it', props)
  return (
    <section className='List'>
      <header className='List-header'>
          <h2>{props.name}</h2>
      </header>


      <div className='AddCatalog__button'>
        <button type='submit'>
          <Link to={`/admin-add-address`}>Add Addresses</Link>
        </button>
      </div>


      <div className='List-cards'>
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
                gospelpresentation={address.gospelpresentation}
                newsalvations={address.newsalvations}
                notes={address.notes}

            />
            // <div>
            //   <h2>
            //     <Link to={`/main/address/${address.id}`}><p>{address.street}{' '}{address.city}{' '}{address.state}{' '}{address.zip} </p>
            //     </Link>
            //   </h2>
            //   <button
            //     className='Note__delete'
            //     type='button'
            //     // onClick={this.handleClickDelete}
            //   >
            //     {' '}
            //     remove
            //   </button>

            // </div>
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

List.defaultProps = {
  onClickAdd:()=>{},
}