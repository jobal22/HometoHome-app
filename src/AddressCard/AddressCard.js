import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './AddressCard.css';

export default function address(props) {
  const {addresses, lists} = props;
  // console.log('HHHHHHHEEEEEYYYYY', props);
  return (
    <div className='Card'>
      {/* <button 
        onClick={() => props.onDeleteItem(props.id)}
        type="button">
          delete
      </button> */}
      <p>
          {props.street}{' '}{props.city}{' '}{props.state}{' '}{props.zip}
      </p>
    </div>
  );
}

// address.propTypes = {
//   onDeleteItem: () => {}
// }