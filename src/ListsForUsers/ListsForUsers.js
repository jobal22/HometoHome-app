import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findList, findAddress, getAddressesForList, getTeamsforList } from '../address-helpers.js'
import Lists from '../Lists/Lists.js'
import Teams from '../Teams/Teams.js'
import AddressCard from '../AddressCard/AddressCard.js'
import TeamAssignment from '../TeamAssignment/TeamAssignment'
import AddTeam from '../AddTeam/AddTeam'
import EditAddress from '../AddressSubmission/AddressSubmission.js'
import config from '../config';
import PropTypes from 'prop-types'
import './ListsForUsers.css'


export default class ListsForUsers extends Component {
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
        const {lists=[], addresses=[], teams=[], addressesMap}= this.context
        const { listId} = this.props.match.params
        const list = findList (lists, listId) || {}
        const address = addresses.filter(address=>list.gpId == address.gospelPresentation && list.nsId == address.newSalvations);
        console.log('jobal look here', address )
        return (
            <div className="listsTeams">
              <section>
                <h3>{list.name}</h3>
              </section>
                {/* <section>
                  <AddTeam/>
                </section> */}
                <section onSubmit={this.handleSubmit}>
                {address.map(a =>
                  // <div key={a.id}>{a.street} {a.city} {a.state} {a.zip} {" "}
                  //   <form
                  //     className='EditBookmark__form'
                  //     onSubmit={this.handleSubmit}
                  //   >
                  //   <select
                  //   name="teams"
                  //   id="teams"
                  //   aria-required="true"
                  //   aria-label="Select a Team"
                  //   onChange={this.handleChangeTeam}
                  //   required
                  //   >
                  //     <option value={''}>Choose A Team</option>
                  //     {this.parseTeams()}
                  //   </select>
                  //   {" "}
                  //   <button type="submit" >Submit</button>
                  //   </form>
                  // </div>
                  <Link to={`/main/address-submission/${a.id}`}><h3>{a.street} {a.city} {a.state} {a.zip} {''} </h3><br></br></Link>
                  
                  )}
                </section>
                
                {/* <section>
                {team.map(t =>
                  <p key={t.id}>{t.name}</p>)}
                </section> */}

                {/* this shows teams in groups */}
                {/* <section>
                {team.map(t =>
                  <Teams
                      key={t.id}
                      id={t.id}
                      name={t.name}
                      //this looks at address related to gpId & nsId
                      //the problem is that each group for this list has the same gpId & nsId
                      // addresses={addresses.filter(address => 
                      //     address.gospelPresentation === t.gpId 
                      //     && address.newSalvations === t.nsId
                      // )}

                      addresses={t.addrIds.map(id => addresses[id])}

                  />
                )}
                </section> */}


            </div>
        )
    }
}
