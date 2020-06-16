import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HometoHomeContext from '../Context/HometoHomeContext'
import { findAddress } from '../address-helpers.js'
import './Addresses.css';

export default class Addresses extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
static contextType = HometoHomeContext;
  render() {
    const {addresses=[]}= this.context
    const { addressId} = this.props.match.params
    const a = findAddress (addresses, addressId) || {}
    return (
      <div className="totalAddress">
        <section>
          <button type='button' className='goBack' onClick={this.props.history.goBack}>
            Go Back
          </button>
        </section>

        <div className='AddressInfoTitle'>
          <h2>Address Information</h2>
        </div>
        <div>
          <h3 className='addressSt'><b>Street: {a.street}</b></h3>
          <p className='addressP'>
            City: {a.city}<br></br>
            State: {a.state}<br></br>
            Zip: {a.zip}<br></br>
            Name: {a.name}<br></br>
            Phone: {a.phone}<br></br>
            Was the Gospel Presented? {a.gospelpresentation}<br></br>
            Were there any new salvations? {a.newsalvations}<br></br>
            Notes: {a.notes}</p>
        </div>
        <div className='editAddress__button'>
          <button type='submit'className='editAddress'>
            <Link className='editAddressLink' to={`/edit-address/${a.id}`}>Edit Address</Link>
          </button>
        </div>
      </div>
    )
  }
}
