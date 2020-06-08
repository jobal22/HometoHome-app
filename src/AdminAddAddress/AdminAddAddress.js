import React, { Component } from  'react';
import PropTypes from 'prop-types';
import HometoHomeContext from '../Context/HometoHomeContext';
import config from '../config'

const Required = () => (
  <span className='AddAddress__required'>*</span>
)

export default class AddAddress extends React.Component {

//   static propTypes = {
//     history: PropTypes.shape({
//       push: PropTypes.func,
//     }).isRequired,
//   };

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
      zip: this.state.zip.value,
      name: this.state.name.value,
      email: this.state.email.value,
      gospelpresentation: this.state.gospelpresentation.value,
      newsalvations: this.state.newsalvations.value,
      notes: this.state.notes.value
      // teamId: this.state.teamId.value,
    }

    // if (newAddress.street === '' || newAddress.city === '' || newAddress.state === '') {
    //   return 
    // }  

    fetch(`${config.API_ENDPOINT}/api/addresses`, {
          method: 'POST',
          body: JSON.stringify(newAddress),
          headers: {
            'content-type': 'application/json',
          },

          // headers: {
          //   'Content-Type': 'application/json',
          // },
          // body: JSON.stringify(newAddress),
        })
        // .then(res => {
        //   if (!res.ok)
        //     return res.json().then(e => Promise.reject(e))
        //   return res.json()
        // })
        .then(res => {
          if (!res.ok)
            return res.json().then(error => Promise.reject(error))
        })
        .then(() => {
          this.context.handleAddAddress(newAddress)
          this.props.history.push('/main/admin')
        //   this.props.history.goBack()

        })
        .catch(error => {
          // console.error('there is a problem')
          console.error(error)
          this.setState({ error })

        })
      }


  handleClickCancel = () => {
    this.props.history.push('/main/users')
  };

//   parseTeams = () => {
//     return this.context.teams.map(team => (
//       <option key={team.teamId} value={team.id}>
//         {team.name}
//       </option>
//     ))
//   }


  render() {
    // const { error } = this.state
    const { error, zip, name, email, salvation, notes  } = this.state
    console.log(this.state)
    return (
      <section className='AddAddress'>
        <h2>Add Address</h2>
        <form
          className='AddAddress__form'
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          {/* <div className='AddAddress__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div> */}
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
              defaultValue='N/A'
              aria-require="true"
              aria-label="zip"
              // placeholder='12345'
              // value={zip}
              onChange={this.handleAddressZip}
              required
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
              defaultValue='N/A'
              // placeholder='Brad Tyler'
              onChange={this.handleAddressName}
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
              defaultValue='N/A'
              // placeholder='BradTyler@google.com'
              onChange={this.handleAddressEmail}
            />
          </div>
          <div>
            <label htmlFor='gospel'>
              Was the Gospel presented?
              {' '}
            </label>
            <label>
              <input type="radio" name="gospel" id="yes" onChange={this.handleAddressGospelPresentation}/> Yes {' '}
              <input type="radio" name="gospel" id="no" onChange={this.handleAddressGospelPresentation}/> No
            </label>
          </div>
          <div>
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
              max='100'
              required
              value={salvation}
              onChange={this.handleAddressNewSalvations}
            />
          </div>
          <div>
            <label htmlFor='notes'>
              Notes
            </label>
            <textarea
              name='notes'
              id='notes'
              defaultValue='N/A'
              // value={notes}
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
        {/* <div>                <h2>{this.props.store.teams.name}</h2></div> */}
      </section>
    );
  }
}