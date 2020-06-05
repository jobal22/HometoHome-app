import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList, findAddress, getAddressesForList, getTeamsforList } from '../address-helpers.js'
import Lists from '../Lists/Lists.js'
import Teams from '../Teams/Teams.js'
import AddressCard from '../AddressCard/AddressCard.js'
import TeamAssignment from '../TeamAssignment/TeamAssignment'
import AddTeam from '../AddTeam/AddTeam'
import config from '../config';
import PropTypes from 'prop-types'

const Required = () => (
<span className='AddressSubmit__required'>*</span>
)

export default class ListsForGroups extends Component {
    // static defaultProps = {
    //     history: {
    //       goBack: () => { }
    //     },
    //     match: {
    //       params: {}
    //     }
    //   }

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
        phone: '0',
        gospelpresentation: 'N/A',
        newsalvations: 0,
        notes: 'N/A'
      };

      // componentDidMount() {
      //   const { addressId } = this.props.match.params
      //   fetch(config.API_ENDPOINT + `/${addressId}`, {
      //     method: 'GET',
      //     headers: {
      //       'content-type': 'application/json',
      //     }      
      //   })
      //     .then(res => {
      //       if (!res.ok)
      //         return res.json().then(error => Promise.reject(error))
    
      //       return res.json()
      //     })
      //     .then(responseData => {
      //       this.setState({
      //         id: responseData.id,
      //         street: responseData.street,
      //         city: responseData.city,
      //         state: responseData.state,
      //         zip: responseData.zip,
      //         name: responseData.name,
      //         phone: responseData.phone,
      //         gospelpresentation: responseData.gospelpresentation,
      //         newsalvations: responseData.newsalvations,
      //         notes: responseData.notes
      //       })
      //     })
      //     .catch(error => {
      //       console.error(error)
      //       this.setState({ error })
      //     })
      // }

      // handleChangeTeam = e => {
      //   this.setState({ team: e.target.value })
      // };
      handleChangeName = e => {
        this.setState({ name: e.target.value })
      };

      handleChangePhone = e => {
        this.setState({ phone: e.target.value })
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
        const { street, city, state, zip, name, phone, gospelpresentation, newsalvations, notes } = this.state
        const newAddress = { ...address, name, phone, gospelpresentation, newsalvations, notes }
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
            // this.resetFields(newAddress)
            this.context.updateAddress(newAddress)
            this.props.history.push('/main/users')
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }

      handleClickCancel = () => {
        this.props.history.push('/main/users')
      };
    
    

      // parseTeams = () => {
      //   return this.context.teams.map(team => (
      //     <option key={team.team_id} value={team.id}>
      //       {team.name}
      //     </option>
      //   ))
      // }
      
    render() {
        const {addresses=[]}= this.context
        const { addressId} = this.props.match.params
        const address = findAddress (addresses, addressId) || {}
        const { error, name, phone, salvation, notes  } = this.state
        // const address = addresses.filter(address=>list.gpId == address.gospelPresentation && list.nsId == address.newSalvations);
        console.log('AAAAHHHHH!!!!', this.props )
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
                            value={name}
                            onChange={this.handleChangeName}
                            />
                        </div>
                        <div>
                            <label htmlFor='phone'>
                            Phone:
                            {' '}
                            </label>
                            <input
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder='123-345-6789'
                            value={phone}
                            onChange={this.handleChangePhone}
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
                            max='20'
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
                            <button type='button' onClick={this.handleClickCancel}>
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
