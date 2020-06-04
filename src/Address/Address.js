import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import AddressSubmit from '../AddressSubmit/AddressSubmit';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findAddress } from '../address-helpers.js'
import PropTypes from 'prop-types'
import './Address.css'

export default class Address extends Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        },
        match: {
          params: {}
        }
      }
      static contextType = HometoHomeContext;
    render() {
        const {addresses} = this.context
        console.log('jobal', this.context)
        const { addressId } = this.props.match.params
        const address = findAddress (addresses, addressId) || {}
        return (
            <main className="homePage">
            <header className="Header">
                <h1>Home to Home</h1>
            </header>

            <section>
                <h2>Address</h2>
                <h3>{address.street}</h3>
                <h4>{address.city}, {address.state}  {address.zip}</h4>

            </section>

            <section className="hpMain">
                <AddressSubmit></AddressSubmit>
            </section>

        </main>
        )
    }
}
