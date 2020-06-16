import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HometoHomeContext from '../Context/HometoHomeContext'
import config from '../config'
import PropTypes from 'prop-types'
import './AddressCard.css';


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
      })
      .then(() => {
          this.context.deleteAddress(addressId)
      })
      .catch(error => {
        console.error('this one', { error })
      })
  }


  render() {
    const {id, street, city, state, zip} = this.props
    return (
      <div className='AddressCards'>
        <section className='addresses'>
          <Link className='addressesLink' to={`/main/address/${id}`}>
            {street}{' '}{city}{' '}{state}{' '}{zip}{' '}
            <button
              className='addressesDeleteButton'
              type='button'
              onClick={this.handleClickDelete}
            >
              remove
            </button>

          </Link>
        </section>
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
