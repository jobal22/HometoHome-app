import React, { Component } from 'react'
import HometoHomeContext from '../Context/HometoHomeContext'
import { findAddress } from '../address-helpers.js'
import config from '../config';
import PropTypes from 'prop-types'

const Required = () => (
  <span className='AddressSubmit__required'>*</span>
)

export default class ListsForGroups extends Component {

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
        console.log(e.target.id, 'gospelLabel')
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
            this.props.history.goBack()
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }
      
    render() {
        const {addresses=[]}= this.context
        const { addressId} = this.props.match.params
        const address = findAddress (addresses, addressId) || {}
        const { street, city, state, zip, name, email, salvation, notes  } = address
        console.log('AAAAHHHHH!!!!', street)
        return (
            <div className="listsTeams">
                <section>
                    <button type='button' onClick={this.props.history.goBack}>
                        Go Back
                    </button>
                </section>

                <section>
                    <h3>{address.street} {address.city} {address.state} {address.zip}</h3>
                </section>
                <section>
                    <form
                        className='AddressSubmit__form'
                        onSubmit={(e) => this.handleSubmit(e,address)}
                        >
                        <div>
                            <label htmlFor='street'>
                            Street
                            {' '}
                            <Required />
                            </label>
                            <input
                            type='text'
                            name='street'
                            id='street'
                            required
                            placeholder={street}
                            onChange={this.handleChangeStreet}
                            />
                        </div>

                        <div>
                            <label htmlFor='city'>
                            City
                            {' '}
                            <Required />
                            </label>
                            <input
                            type='text'
                            name='city'
                            id='city'
                            placeholder={city}
                            required
                            onChange={this.handleChangeCity}
                            />
                        </div>

                        <div>
                            <label htmlFor='state'>
                            State
                            {' '}
                            <Required />
                            </label>
                            <input
                            type='text'
                            name='state'
                            id='state'
                            placeholder={state}
                            required
                            onChange={this.handleChangeState}
                            />
                        </div>

                        <div>
                            <label htmlFor='zip'>
                            Zip
                            {' '}
                            </label>
                            <input
                            type='number'
                            name='zip'
                            id='zip'
                            placeholder={zip}
                            onChange={this.handleChangeZip}
                            />
                        </div>

                        <div>
                            <label htmlFor='name'>
                            Name
                            {' '}
                            </label>
                            <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder={name}
                            onChange={this.handleChangeName}
                            />
                        </div>
                        <div>
                            <label htmlFor='email'>
                            Email:
                            {' '}
                            </label>
                            <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder={email}
                            onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div>
                            <label htmlFor='gospel'>
                            Was the Gospel presented?
                            {' '}
                            </label>
                            <label >
                                <input type="radio" name="gospel" id="yes" onChange={this.handleChangeGospelPresentation}/> Yes {' '}
                                <input type="radio" name="gospel" id="no" onChange={this.handleChangeGospelPresentation}/> No
                            </label>
                        </div>
                        <div>
                            <label htmlFor='salvation'>
                            Were there new professions of faith?
                            {' '}
                            <Required />
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
                        <div>
                            <label htmlFor='notes'>
                            Notes
                            </label>
                            <textarea
                            name='notes'
                            id='notes'
                            placeholder={notes}
                            onChange={this.handleChangeNotes}
                            />
                        </div>
                        <div className='AddressSubmit__buttons'>
                            <button type='button' onClick={this.props.history.goBack}>
                            Cancel
                            </button>
                            {' '}
                            <button type='submit'>
                            Submit
                            </button>
                        </div>
                    </form>

                </section>
            </div>
        )
    }
}