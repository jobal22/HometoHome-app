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
          <button type='button' onClick={this.props.history.goBack}>
            Go Back
          </button>
        </section>

      <p><b>Street: {a.street}</b> <br></br>
      City: {a.city}<br></br>
      State: {a.state}<br></br>
      Zip: {a.zip}<br></br>
      Name: {a.name}<br></br>
      Phone: {a.phone}<br></br>
      Was the Gospel Presented? {a.gospelpresentation}<br></br>
      Were there any new salvations? {a.newsalvations}<br></br>
      Notes: {a.notes}</p>
      <div className='EditAddress__button'>
        <button type='submit'>
          <Link to={`/edit-address/${a.id}`}>Edit Address</Link>
        </button>
      </div>
    </div>
    )
  }
}
