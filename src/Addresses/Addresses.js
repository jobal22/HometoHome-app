import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Addresses.css';

export default function address(props) {
  return (
    <div className='Card'>
      {/* <button 
        onClick={() => props.onDeleteItem(props.id)}
        type="button">
          delete
      </button> */}
      <Link to={`/main/address/${props.id}`}>
          {props.street}{' '}{props.city}{' '}{props.state}{' '}{props.zip}
      </Link>
      <p>
        {props.name} {props.phone} {props.gospelPresentation} {props.newSalvations} {props.notes}
      </p>
      <p >
          {props.notes}
      </p>
    </div>
  );
}

// address.propTypes = {
//   onDeleteItem: () => {}
// }