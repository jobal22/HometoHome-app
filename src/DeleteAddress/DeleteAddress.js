import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList, findAddress, getAddressesForList, getTeamsforList } from '../address-helpers.js'
import config from '../config'
import PropTypes from 'prop-types'

export default class AddressCard extends Component {

  static contextType = HometoHomeContext;

  handleClickDelete = e => {
    e.preventDefault()
    const addressId = this.props.match.params
    console.log(addressId)

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
    const {addresses=[]}= this.context
    const { addressId} = this.props.match.params
    const address = findAddress (addresses, addressId) || {}
    // const { error, name, email, salvation, notes  } = this.state

    console.log('this is prop', this.context)
    return (
      <div className='Card'>
      {/* <button 
        onClick={() => props.onDeleteItem(props.id)}
        type="button">
          delete
      </button> */}



        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          {/* <FontAwesomeIcon icon='trash-alt' /> */}
          {' '}
          remove
        </button>

    </div>
    )
  }
}
