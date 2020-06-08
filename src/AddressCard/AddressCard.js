// import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom'
// import HometoHomeContext from '../Context/HometoHomeContext'
// import { findList, findAddress, getAddressesForList, getTeamsforList } from '../address-helpers.js'
// import config from '../config'
// import PropTypes from 'prop-types'

// export default class AddressCard extends Component {

//   static contextType = HometoHomeContext;

//   handleClickDelete = e => {
//     e.preventDefault()
//     const addressId = this.props.id

//     fetch(`${config.API_ENDPOINT}/api/addresses/${addressId}`, {
//       method: 'DELETE',
//       headers: {
//         'content-type': 'application/json'
//       },
//     })
//       .then(res => {
//         if (!res.ok)
//           return res.json().then(e => Promise.reject(e))
//         // return res.json()
//       })
//       .then(() => {
//           this.context.deleteAddress(addressId)
//         // allow parent to perform extra behaviour
//         // this.props.onDeleteNote(note_id)
//           // this.props.history.push(`/`);
//           // this.props.history.goBack()
//       })
//       .catch(error => {
//         console.error('this one', { error })
//       })
//   }


//   render() {
//     const {addresses=[]}= this.context
//     const { addressId} = this.props.match.params
//     const address = findAddress (addresses, addressId) || {}
//     // const { error, name, email, salvation, notes  } = this.state

//     console.log('this is prop', this.context)
//     return (
//       <div className='Card'>
//       {/* <button 
//         onClick={() => props.onDeleteItem(props.id)}
//         type="button">
//           delete
//       </button> */}

//       <p>
//           {address.street}{' '}{address.city}{' '}{address.state}{' '}{address.zip}
//           {/* {street}{' '}{city}{' '}{state}{' '}{zip} */}
//       </p>

//       <p><b>Street: {address.street}</b> <br></br>
//           City: {address.city}<br></br>
//           State: {address.state}<br></br>
//           Zip: {address.zip}<br></br>
//           Name: {address.name}<br></br>
//           Email: {address.email}<br></br>
//           Was the Gospel Presented? {address.gospelpresentation}<br></br>
//           Were there any new salvations? {address.newsalvations}<br></br>
//           Notes: {address.notes}
//       </p>


//         <button
//           className='Note__delete'
//           type='button'
//           onClick={this.handleClickDelete}
//         >
//           {/* <FontAwesomeIcon icon='trash-alt' /> */}
//           {' '}
//           remove
//         </button>

//     </div>
//     )
//   }
// }

// AddressCard.propTypes = {
//   onDeleteNote: PropTypes.func,
//   street: PropTypes.string,
//   city: PropTypes.string,
//   state: PropTypes.string,
//   zip: PropTypes.number
// }


// old way before making Lists link to AddressCard
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import HometoHomeContext from '../Context/HometoHomeContext'
import config from '../config'
import PropTypes from 'prop-types'

export default class AddressCard extends Component {

  static contextType = HometoHomeContext;

  handleClickDelete = e => {
    e.preventDefault()
    const addressId = this.props.id

    fetch(`${config.API_ENDPOINT}/api/addresses/${addressId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        // return res.json()
      })
      .then(() => {
          this.context.deleteAddress(addressId)
        // allow parent to perform extra behaviour
        // this.props.onDeleteNote(note_id)
          // this.props.history.push(`/`);
          // this.props.history.goBack()
      })
      .catch(error => {
        console.error('this one', { error })
      })
  }


  render() {
    // const {addresses, lists} = props;
    const {id, street, city, state, zip} = this.props
    console.log('this is prop', this.props, 'this is state', this.state, 'this is context', this.context)
    return (
      <div className='Card'>
      {/* <button 
        onClick={() => props.onDeleteItem(props.id)}
        type="button">
          delete
      </button> */}

      {/* <p> */}
          {/* {props.street}{' '}{props.city}{' '}{props.state}{' '}{props.zip} */}
          {/* {street}{' '}{city}{' '}{state}{' '}{zip}
      </p> */}
        <Link to={`/main/address/${id}`}>{street}{' '}{city}{' '}{state}{' '}{zip}</Link>
        <p>
          <button
            className='Note__delete'
            type='button'
            onClick={this.handleClickDelete}
          >
            remove
          </button>
        </p>

    </div>
    )
  }
}

AddressCard.propTypes = {
  onDeleteNote: PropTypes.func,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number
}

// old way thru function
// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

// import './AddressCard.css';

// export default function address(props) {
//   const {addresses, lists} = props;
//   // console.log('HHHHHHHEEEEEYYYYY', props);
//   return (
//     <div className='Card'>
//       {/* <button 
//         onClick={() => props.onDeleteItem(props.id)}
//         type="button">
//           delete
//       </button> */}
//       <p>
//           {props.street}{' '}{props.city}{' '}{props.state}{' '}{props.zip}
//       </p>
//     </div>
//   );
// }

// address.propTypes = {
//   onDeleteItem: () => {}
// }
