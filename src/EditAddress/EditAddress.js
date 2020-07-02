import React, { Component } from 'react'
import HometoHomeContext from '../Context/HometoHomeContext'
import { findAddress } from '../address-helpers.js'
import config from '../config'
import PropTypes from 'prop-types'
import './EditAddress.css'
import Swal from 'sweetalert2'

const Required = () => (
  <span className='AddressSubmit__required'>*</span>
)

export default class EditAddress extends Component {

      static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.object,
        }),
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };

      static contextType = HometoHomeContext;

      state = {
        error: null,
        id: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        name:'N/A',
        email: 'N/A',
        gospelpresentation: 'N/A',
        newsalvations: 0,
        notes: 'N/A'
      };

      handleChangeStreet = e => {
        this.setState({ street: e.target.value })
      };

      handleChangeCity = e => {
        this.setState({ city: e.target.value })
      };

      handleChangeState = e => {
        this.setState({ state: e.target.value })
      };

      handleChangeZip = e => {
        this.setState({ zip: e.target.value })
      };

      handleChangeName = e => {
        this.setState({ name: e.target.value })
      };

      handleChangeEmail = e => {
        this.setState({ email: e.target.value })
      };

      handleChangeGospelPresentation = e => {
        // console.log(e.target.id, 'gospelLabel')
        this.setState({ gospelpresentation: e.target.id})
      };

      handleChangeNewSalvations = e => {
        this.setState({ newsalvations: e.target.value })
      };

      handleChangeNotes = e => {
        this.setState({ notes: e.target.value })
      };

      handleSubmit = (e, address) => {
        e.preventDefault()
        const { addressId } = this.props.match.params
        const { street, city, state, zip, name, email, gospelpresentation, newsalvations, notes } = this.state
        const newAddress = {street, city, state, zip, name, email, gospelpresentation, newsalvations, notes }
        fetch(config.API_ENDPOINT + `/api/addresses/${addressId}`, {
          method: 'PATCH',
          body: JSON.stringify(newAddress),
          headers: {
            'content-type': 'application/json',
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
          })
          .then(() => {
            this.context.updateAddress(newAddress)
            Swal.fire('Congrats!', 'Address updated', 'success')
            .then(() => {
              this.props.history.goBack()
            })
          })
          .catch(error => {
            Swal.fire('Oops!', 'Address failed', 'error')
            console.error(error)
            this.setState({ error })
          })
      }
      
    render() {
        const {addresses=[]}= this.context
        const { addressId} = this.props.match.params
        const address = findAddress (addresses, addressId) || {}
        const { street, city, state, zip, name, email, salvation, notes  } = address
        return (
            <div className="EditAddress">
                <section>
                    <button type='button' className='goBack' onClick={this.props.history.goBack}>
                        Go Back
                    </button>
                </section>

                <section>
                  <h2 className='EditTitle'>Edit Address</h2>
                  <h3 className='EditAddressHeader'>{address.street} {address.city} {address.state} {address.zip}</h3>
                </section>
                <section>
                    <form
                        className='EditAddress__form'
                        onSubmit={(e) => this.handleSubmit(e,address)}
                        >
                        <div className='formInfo'>
                            <label htmlFor='street'>
                            Street:
                            {' '}
                            <Required /> {''}
                            </label>
                            <input
                            type='text'
                            name='street'
                            id='street'
                            required
                            defaultValue={street}
                            onChange={this.handleChangeStreet}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='city'>
                            City:
                            {' '}
                            <Required /> {''}
                            </label>
                            <input
                            type='text'
                            name='city'
                            id='city'
                            defaultValue={city}
                            required
                            onChange={this.handleChangeCity}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='state'>
                            State:
                            {' '}
                            <Required /> {''}
                            </label>
                            <input
                            type='text'
                            name='state'
                            id='state'
                            defaultValue={state}
                            required
                            onChange={this.handleChangeState}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='zip'>
                            Zip:
                            {' '}
                            </label>
                            <input
                            type='number'
                            name='zip'
                            id='zip'
                            defaultValue={zip}
                            onChange={this.handleChangeZip}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='name'>
                            Name:
                            {' '}
                            </label>
                            <input
                            type='text'
                            name='name'
                            id='name'
                            defaultValue={name}
                            onChange={this.handleChangeName}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='email'>
                            Email:
                            {' '}
                            </label>
                            <input
                            type='text'
                            name='email'
                            id='email'
                            defaultValue={email}
                            onChange={this.handleChangeEmail}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='gospel'>
                            Was the Gospel presented?
                            {' '}
                            </label>
                            <label >
                                <input type="radio" name="gospel" id="yes" onChange={this.handleChangeGospelPresentation}/> Yes {' '}
                                <input type="radio" name="gospel" id="no" onChange={this.handleChangeGospelPresentation}/> No
                            </label>
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='salvation'>
                            Were there new professions of faith?
                            {' '}
                            <Required /> {''}
                            </label>
                            <input
                            type='number'
                            name='salvation'
                            id='salvation'
                            defaultValue='0'
                            min='0'
                            max='1'
                            required
                            value={salvation}
                            placeholder={salvation}
                            onChange={this.handleChangeNewSalvations}
                            />
                        </div>

                        <div className='formInfo'>
                            <label htmlFor='notes'>
                            Notes:
                            {' '}
                            </label>
                            <textarea
                            name='notes'
                            id='notes'
                            className='notes'
                            defaultValue={notes}
                            onChange={this.handleChangeNotes}
                            />
                        </div>

                        <div className='AddressSubmit__buttons'>
                            <button type='button' className='AddressSubmit' onClick={this.props.history.goBack}>
                            Cancel
                            </button>
                            {' '}
                            <button type='submit' className='AddressSubmit'>
                            Submit
                            </button>
                        </div>
                    </form>

                </section>
            </div>
        )
    }
}
