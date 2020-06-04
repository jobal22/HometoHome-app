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
        name:'',
        phone: '',
        gospelPresentation: '',
        newSalvations: '',
        notes: '',
        teamId: '',
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
      //         name: responseData.name,
      //         city: responseData.city,
      //         state: responseData.state,
      //         zip: responseData.zip,
      //         name: responseData.name,
      //         phone: responseData.phone,
      //         gospelPresentation: responseData.gospelPresentation,
      //         newSalvations: responseData.newSalvations,
      //         notes: responseData.notes,
      //         teamId: responseData.teamId,
      //       })
      //     })
      //     .catch(error => {
      //       console.error(error)
      //       this.setState({ error })
      //     })
      // }

      handleChangeTeam = e => {
        this.setState({ team: e.target.value })
      };

      handleSubmit = e => {
        e.preventDefault()
        const { addressId } = this.props.match.params
        const { teamId } = this.state
        const newAddress = { teamId }
        fetch(config.API_ENDPOINT + `/${addressId}`, {
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
            this.resetFields(newAddress)
            this.context.updateAddress(newAddress)
            // this.props.history.push('/')
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }
    

      parseTeams = () => {
        return this.context.teams.map(team => (
          <option key={team.team_id} value={team.id}>
            {team.name}
          </option>
        ))
      }
    render() {
        const {addresses=[]}= this.context
        const { addressId} = this.props.match.params
        const address = findAddress (addresses, addressId) || {}
        const { error } = this.state
        // const address = addresses.filter(address=>list.gpId == address.gospelPresentation && list.nsId == address.newSalvations);
        console.log('AAAAHHHHH!!!!', address )
        return (
            <div className="listsTeams">
                <section>
                    <h3>{address.street} {address.city} {address.state} {address.zip}</h3>
                </section>
                <section>
                   {/* <form
                      className='EditBookmark__form'
                      onSubmit={this.handleSubmit}
                    >
                    <select
                    name="teams"
                    id="teams"
                    aria-required="true"
                    aria-label="Select a Team"
                    onChange={this.handleChangeTeam}
                    required
                    >
                      <option value={''}>Choose A Team</option>
                      {this.parseTeams()}
                    </select>
                    {" "}
                    <button type="submit" >Submit</button>
                    </form> */}

                    <form
                        className='AddressSubmit__form'
                        onSubmit={this.handleSubmit}
                        >
                        <div className='AddressSubmit__error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
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
                            />
                        </div>
                        <div>
                            <label htmlFor='number'>
                            Phone:
                            {' '}
                            </label>
                            <input
                            type='text'
                            name='number'
                            id='number'
                            placeholder='123-345-6789'
                            />
                        </div>
                        <div>
                            <label htmlFor='gospel'>
                            Was the Gospel presented?
                            {' '}
                            <Required />
                            </label>
                            <label>
                                <input type="radio" name="gospel" value="Yes" /> Yes {' '}
                                <input type="radio" name="gospel" value="No" required/> No
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
                            name='rating'
                            id='rating'
                            defaultValue='0'
                            min='0'
                            max='20'
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor='notes'>
                            Notes
                            </label>
                            <textarea
                            name='notes'
                            id='notes'
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
