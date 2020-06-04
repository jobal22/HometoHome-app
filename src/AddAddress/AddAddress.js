import React, { Component } from  'react';
import PropTypes from 'prop-types';
import HometoHomeContext from '../Context/HometoHomeContext';
import config from '../config'
import './AddAddress.css';

const Required = () => (
  <span className='AddAddress__required'>*</span>
)



export default class AddAddress extends React.Component {

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
          value: '',
        },
      }
    

//   static propTypes = {
//     history: PropTypes.shape({
//       push: PropTypes.func,
//     }).isRequired,
//   };

  static contextType = HometoHomeContext;

  // state = {
  //   error: null,
  // };

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

  // handleFormSubmit = (e) => {
    // e.preventDefault(e)
    // const { street, city, state, zip, teamId} = e.target
    // const newAddress = {
    //   street: this.state.street.value,
    //   city: this.state.city.value,
    //   state: this.state.state.value,
    //   zip: this.state.zip.value,
    //   teamId: this.state.teamId.value,
    // }
    // this.setState({error:null})
    // fetch(`${config.API_ENDPOINT}/api/addresses`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newAddress),
    //     })
    //     .then(res => {
    //       if (!res.ok)
    //         return res.json().then(e => Promise.reject(e))
    //       return res.json()
    //     })
    //     .then(address => {
    //       street.value = ''
    //       city.value = ''
    //       state.value = ''
    //       zip.value = ''
    //       teamId.value = ''
    //       this.context.addAddress(address)
    //       this.props.history.push('/main')
    //     })
    //     .catch(error => {
    //       console.error('there is a problem')
    //     })
    //   }


  handleFormSubmit = (e) => {
    e.preventDefault(e)
    const newAddress = {
      street: this.state.street.value,
      city: this.state.city.value,
      state: this.state.state.value,
      // zip: this.state.zip.value,
      // teamId: this.state.teamId.value,
    }

    if (newAddress.street === '' || newAddress.city === '' || newAddress.state === '' || newAddress.zip === '') {
      return 
    }  

    fetch(`${config.API_ENDPOINT}/api/addresses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newAddress),
        })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(address => {
          this.context.handleAddAddress(address)
          this.props.history.push('/main/admin')
        })
        .catch(error => {
          console.error('there is a problem')
        })
        console.log('new call', this.context)
      }


  handleClickCancel = () => {
    this.props.history.push('/main')
  };

//   parseTeams = () => {
//     return this.context.teams.map(team => (
//       <option key={team.teamId} value={team.id}>
//         {team.name}
//       </option>
//     ))
//   }


  render() {
    const { error } = this.state
    return (
      <section className='AddAddress'>
        <h2>Add Address</h2>
        <form
          className='AddAddress__form'
          onSubmit={this.handleFormSubmit}
        >
          <div className='AddAddress__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
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
              aria-require="true"
              aria-label="Street"
              placeholder='123 Lake Ln'
              onChange={this.handleAddressStreet}
              required
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
              aria-require="true"
              aria-label="city"
              placeholder='Fort Worth'
              onChange={this.handleAddressCity}
              required
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
              aria-require="true"
              aria-label="state"
              placeholder='LA'
              onChange={this.handleAddressState}
              required
            />
          </div>
          <div>
            <label htmlFor='zip'>
              Zip
              {' '}
            </label>
            <input
              type='text'
              name='zip'
              id='zip'
              aria-require="true"
              aria-label="zip"
              placeholder='12345'
              onChange={this.handleAddressZip}
              required
            />
          </div>
          {/* <div>
            <label htmlFor='group'>
              Group
              {' '}
            </label>
            <input
              type='text'
              name='group'
              id='group'
              placeholder='Group Brad'
            />
          </div> */}
          {/* <div>
            <label htmlFor="teams">Select a Team {' '}</label>
            <select
                name="teams"
                id="teams"
                aria-required="true"
                aria-label="Select a team"
                onChange={this.handleAddressTeamId}
                required
            >
                <option value={''}>Choose team</option>
                {this.parseTeams()}
            </select>
          </div> */}

          <div className='AddAddress__buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit'>Save</button>
          </div>
        </form>
        {/* <div>                <h2>{this.props.store.teams.name}</h2></div> */}
      </section>
    );
  }
}