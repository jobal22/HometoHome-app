import React from  'react';
import PropTypes from 'prop-types';
import HometoHomeContext from '../Context/HometoHomeContext';
import config from '../config';
import './AddAddress.css';
import Swal from 'sweetalert2';

const Required = () => (
  <span className='AddAddress__required'>*</span>
)

export default class AddAddress extends React.Component {

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
    street: {
        touched: false,
        value: '',
    },
    city: {
        touched: false,
        value: '',
    },
    state: {
      touched: false,
      value: '',
    },
    zip: {
      touched: false,
      value: '0',
    },
    name: {
      touched: false,
      value: 'N/A',
    },
    email: {
      touched: false,
      value: 'N/A',
    },
    gospelpresentation: {
      touched: false,
      value: 'N/A',
    },
    newsalvations: {
      touched: false,
      value: '0',
    },
    notes: {
      touched: false,
      value: 'N/A',
    }
  }


  handleAddressStreet = (e) => {
    let {street} = this.state
    street.value = e.target.value
    this.setState({street})
  }

  handleAddressCity = (e) => {
    let {city} = this.state
    city.value = e.target.value
    this.setState({city})
  }

  handleAddressState = (e) => {
    let {state} = this.state
    state.value = e.target.value
    this.setState({state})
  }

  handleAddressZip = (e) => {
    let {zip} = this.state
    zip.value = e.target.value
    this.setState({zip})
  }

  handleAddressName = (e) => {
    let {name} = this.state
    name.value = e.target.value
    this.setState({name})
  }

  handleAddressEmail = (e) => {
    let {email} = this.state
    email.value = e.target.value
    this.setState({email})
  }

  handleAddressGospelPresentation = (e) => {
    let {gospelpresentation} = this.state
    gospelpresentation.value = e.target.id
    this.setState({gospelpresentation})
  }

  handleAddressNewSalvations = (e) => {
    let {newsalvations} = this.state
    newsalvations.value = e.target.value
    this.setState({newsalvations})
  }

  handleAddressNotes = (e) => {
    let {notes} = this.state
    notes.value = e.target.value
    this.setState({notes})
  }

  handleFormSubmit = (e) => {
    e.preventDefault(e)
    const newAddress = {
      street: this.state.street.value,
      city: this.state.city.value,
      state: this.state.state.value,
      zip: this.state.zip.value,
      name: this.state.name.value,
      email: this.state.email.value,
      gospelpresentation: this.state.gospelpresentation.value,
      newsalvations: this.state.newsalvations.value,
      notes: this.state.notes.value
    }

    fetch(`${config.API_ENDPOINT}/api/addresses`, {
          method: 'POST',
          body: JSON.stringify(newAddress),
          headers: {
            'content-type': 'application/json',
          },
        })
        .then(res => {
          return res.json()
        })
        .then((data) => {
          console.log('JOBAL LOOK', data)
          this.context.handleAddAddress(data)
          Swal.fire('Congrats!', 'Address saved', 'success')
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


  handleClickCancel = () => {
    this.props.history.push('/main/users')
  };

  render() {
    const { salvation } = this.state
    return (
      <section className='AddAddress'>
        <h2 className='AddAddressHeader'>Add Address</h2>
        <form
          className='AddAddress__form'
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          <div className='formInfo'>
            <label htmlFor='street'>
              Street:
              {' '}
              <Required/> {' '}
            </label>
            <input
              type='text'
              name='street'
              id='street'
              aria-label="Street"
              placeholder='123 Lake Ln'
              onChange={this.handleAddressStreet}
              required
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='city'>
              City:
              {' '}
              <Required/> {' '}
            </label>
            <input
              type='text'
              name='city'
              id='city'
              aria-label="city"
              placeholder='Fort Worth'
              onChange={this.handleAddressCity}
              required
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='state'>
              State:
              {' '}
              <Required/> {' '}
            </label>
            <input
              type='text'
              name='state'
              id='state'
              aria-label="state"
              placeholder='LA'
              onChange={this.handleAddressState}
              required
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='zip'>
              Zip:
              {' '}
            </label>
            <input
              type='text'
              name='zip'
              id='zip'
              defaultValue='N/A'
              aria-label="zip"
              onChange={this.handleAddressZip}
              required
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
              defaultValue='N/A'
              onChange={this.handleAddressName}
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
              defaultValue='N/A'
              onChange={this.handleAddressEmail}
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='gospel'>
              Was the Gospel presented?
              {' '}
            </label>
            <label>
              <input type="radio" name="gospel" id="yes" onChange={this.handleAddressGospelPresentation}/> Yes {' '}
              <input type="radio" name="gospel" id="no" onChange={this.handleAddressGospelPresentation}/> No
            </label>
          </div>
          <div className='formInfo'>
            <label htmlFor='salvation'>
              Were there new professions of faith?
              {' '}
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
              onChange={this.handleAddressNewSalvations}
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='notes'>
              Notes
              {' '}
            </label>
            <textarea
              name='notes'
              id='notes'
              defaultValue='N/A'
              onChange={this.handleAddressNotes}
            />
           </div>
          
          <div className='AddAddress__buttons'>
            <button type='button' onClick={this.props.history.goBack}>
              Cancel
            </button>
            {' '}
            <button type='submit'>Save</button>
          </div>
        </form>
      </section>
    );
  }
}