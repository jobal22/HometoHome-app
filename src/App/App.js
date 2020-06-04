import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import STORE from '../Store/dummy-store';
import HometoHomeContext from '../Context/HometoHomeContext'
import HomePage from '../HomePage/HomePage.js'
import Administration from '../Administration/Administration.js'
import Address from '../Address/Address.js'
import Addresses from '../Addresses/Addresses.js'
import AddAddress from '../AddAddress/AddAddress.js'
import AddressSubmission from '../AddressSubmission/AddressSubmission.js'
import Users from '../Users/Users.js'
import ListsForUsers from '../ListsForUsers/ListsForUsers.js'
import config from '../config'
import LandingPage from '../LandingPage/LandingPage.js'
import './App.css'


export default class App extends Component {
  state = {
    addresses: [],
    lists: [],
    teams: [],
    newAddress: {
      hassError: false,
      touched: false,
      name: '',
    },
    newTeam: {
      hassError: false,
      touched: false,
      name: '',
    },

  }
  // state = {
  //   store: STORE,
  // };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/addresses`),
      fetch(`${config.API_ENDPOINT}/api/lists`),
      fetch(`${config.API_ENDPOINT}/api/teams`),
    ])
      .then(([addressesRes, listsRes, teamsRes]) => {
        if (!addressesRes.ok) return addressesRes.json().then(e => Promise.reject(e))
        if (!listsRes.ok) return listsRes.json().then(e => Promise.reject(e))
        if (!teamsRes.ok) return teamsRes.json().then(e => Promise.reject(e))
        return Promise.all([addressesRes.json(), listsRes.json(), teamsRes.json()])
      })
      .then(([addresses, lists, teams]) => {
        this.setState({ addresses, lists, teams })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddAddress = address => {
    this.setState({
      addresses: [...this.state.addresses, address],
    })
  }

  handleAddTeam = team => {
    this.setState({
      teams: [...this.state.teams, team],
    })
  }

  updateNewTeamName = name => {
    this.setState({
      newTeam: {
        hasError: false,
        touched: true,
        name: name,
      },
    })
  }

  updateAddress = updatedAddress => {
    this.setState({
      addresses: this.state.addresses.map(ad =>
        (ad.id !== updatedAddress.id) ? ad : updatedAddress)
    })
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path = "/main" component={HomePage}/>
        <Route path = "/main/admin" component={Administration}/>
        <Route exact path = "/main/addresses" component={Addresses}/>
        <Route exact path = "/main/users" component={Users}/>
        <Route path = "/main/users/list/:listId" component={ListsForUsers}/>
        <Route path = "/main/address/:addressId" component={Address}/>
        <Route path = "/main/address-submission/:addressId" component={AddressSubmission}/>
        <Route path = "/add-address" component={AddAddress}/>
      </>
    )
  }

  render() {
    const store = this.state;
    const contextValue = {
      addresses: this.state.addresses,
      lists: this.state.lists,
      teams: this.state.teams,
      addTeam: this.handleAddTeam,
      newTeam: this.state.newTeam,
      updateNewTeamName: this.updateNewTeamName,
      updateAddress: this.updateAddress,

    }
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link to={"/main"}>Nav</Link>
        </nav>
        <main>
          <div>
              <HometoHomeContext.Provider value={contextValue}>
              <div className="App__link">
                <main className="App__main">{this.renderMainRoutes()}</main>
              </div>
              </HometoHomeContext.Provider>
              {/* <Route
                exact
                path = "/"
                render = {routeProps => {
                  return <LandingPage {...routeProps} store={store}/>
                }}
              />

            <Route
                exact
                path = "/main"
                render = {routeProps => {
                  return <HomePage {...routeProps} store={store}/>
                }}
              />
            <Route
                path = "/main/admin"
                render = {routeProps => {
                  return <Administration {...routeProps} store={store}/>
                }}
              />
            <Route
                path = "/main/address/:addressId"
                render = {routeProps => {
                  return <Address {...routeProps} store={store}/>
                }}
              /> */}

          </div>
        </main>
      </div>
    )
  }
}

