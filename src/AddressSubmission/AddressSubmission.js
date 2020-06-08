import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList, findAddress, getAddressesForList, getTeamsforList } from '../address-helpers.js'
import Lists from '../Lists/Lists.js'
import AddressCard from '../AddressCard/AddressCard.js'
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
        name: '',
        city: '',
        state: '',
        zip: '',
        name:'N/A',
        email: 'N/A',
        gospelpresentation: 'N/A',
        newsalvations: 0,
        notes: 'N/A'
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
        const newAddress = { ...address, name, email, gospelpresentation, newsalvations, notes }
        console.log(newAddress)
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
            // this.props.history.push('/main/users')
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
        const { error, name, email, salvation, notes  } = this.state
        // const address = addresses.filter(address=>list.gpId == address.gospelPresentation && list.nsId == address.newSalvations);
        console.log('AAAAHHHHH!!!!', this.props.history)
        return (
            <div className="listsTeams">
                <section>
                    <h3>{address.street} {address.city} {address.state} {address.zip}</h3>
                </section>
                <section>
                    <form
                        className='AddressSubmit__form'
                        // onSubmit={this.handleSubmit}
                        onSubmit={(e) => this.handleSubmit(e,address)}
                        >
                        {/* <div className='AddressSubmit__error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div> */}
                        <div>
                            <label htmlFor='name'>
                            Name
                            {' '}
                            <Required />
                            </label>
                            <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Brad Tyler'
                            required
                            // value={name}
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
                            placeholder='BradTyler@google.com'
                            // value={email}
                            onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div>
                            <label htmlFor='gospel'>
                            Was the Gospel presented?
                            {' '}
                            <Required />
                            </label>
                            <label>
                              
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
                            max='100'
                            required
                            value={salvation}
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
                            value={notes}
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
