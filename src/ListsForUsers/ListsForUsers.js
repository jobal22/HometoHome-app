import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList} from '../address-helpers.js'
import config from '../config';
import PropTypes from 'prop-types'
import './ListsForUsers.css'


export default class ListsForUsers extends Component {

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
        id: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        name:'',
        phone: '',
        gospepresentation: '',
        newsalvations: '',
        notes: '',
        teamId: '',
      };

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
        const {lists=[], addresses=[] }= this.context
        const { listId} = this.props.match.params
        const list = findList (lists, listId) || {}
        const address = addresses.filter(address=>list.gpid == address.gospelpresentation && list.nsid == address.newsalvations);
        const addressCount = addresses.filter(address=>list.gpid == address.gospelpresentation && list.nsid == address.newsalvations).length;
        console.log(addressCount)
        return (
            <div className="listsTeams">
              <section>
                <h3>{list.name} ({addressCount})</h3>
                <section>
                  <div className='GoBack__button'>
                    <button type='button' onClick={this.props.history.goBack}>
                        Go Back
                    </button>
                  </div>

                  <div className='AddCatalog__button'>
                    <button type='submit'>
                      <Link to={`/add-address`}>Add Addresses</Link>
                    </button>
                  </div>
                </section>


              </section>
                <section onSubmit={this.handleSubmit} >
                {address.map(a =>
                  <Link to={`/main/address-submission/${a.id}`}><h3>{a.street} {a.city} {a.state} {a.zip} {''} </h3><br></br></Link>
                  )}
                </section>
            </div>
        )
    }
}
