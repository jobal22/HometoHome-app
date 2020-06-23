import React, { Component } from 'react'
import HometoHomeContext from '../Context/HometoHomeContext'
import { findAddress } from '../address-helpers.js'
import GHM from '../GHM/GHM.js'
import config from '../config';
import PropTypes from 'prop-types'
import './AddressSubmission.css'

const Required = () => (
  <span className='AddressSubmit__required'>*</span>
)

export default class AddressSubmission extends Component {

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

      handleChangeName = e => {
        this.setState({ name: e.target.value })
      };

      handleChangeEmail = e => {
        this.setState({ email: e.target.value })
      };

      handleChangeGospelPresentation = e => {
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
        const { name, email, gospelpresentation, newsalvations, notes } = this.state
        const newAddress = { ...address, name, email, gospelpresentation, newsalvations, notes }
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
        const { salvation, notes  } = this.state
        return (
            <div className="SubmissionAddress">
              <GHM/>
                <section>
                  <h2 className='SubmissionTitle'>Address Form</h2>
                  <h3 className='SubmissionAddressHeader'>{address.street} {address.city} {address.state} {address.zip}</h3>
                </section>
                <section>
                    <form
                        className='submissionAddress__form'
                        onSubmit={(e) => this.handleSubmit(e,address)}
                        >
                        <div className='submissionFormInfo'>
                            <label htmlFor='name'>
                            Name:
                            {' '}
                            <Required/> {' '}
                            </label>
                            <input
                            className='textInfo'
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Brad Tyler'
                            required
                            onChange={this.handleChangeName}
                            />
                        </div>
                        <div className='submissionFormInfo'>
                            <label htmlFor='email'>
                            Email:
                            {' '}
                            </label>
                            <input
                            className='emailInfo'
                            type='text'
                            name='email'
                            id='email'
                            placeholder='BradTyler@google.com'
                            onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className='submissionFormInfo'>
                            <label htmlFor='gospel'>
                            Was the Gospel presented?
                            {' '}
                            <Required/> {' '}
                            </label>
                            <label>
                              
                                <input type="radio" name="gospel" id="yes" onChange={this.handleChangeGospelPresentation}/> Yes {' '}
                                <input type="radio" name="gospel" id="no" onChange={this.handleChangeGospelPresentation}/> No
                            </label>
                        </div>
                        <div className='submissionFormInfo'>
                            <label htmlFor='salvation'>
                            Were there new professions of faith?
                            {' '}
                            <Required/> {' '}
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
                            onChange={this.handleChangeNewSalvations}
                            />
                        </div>
                        <div className='submissionFormInfo'>
                            <label htmlFor='notes'>
                            Notes:
                            </label> {''}
                            <textarea
                            className='notesInfo'
                            name='notes'
                            id='notes'
                            value={notes}
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
