import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import HomePage from '../HomePage/HomePage.js'
import Administration from '../Administration/Administration.js'
import EditAddress from '../EditAddress/EditAddress.js'
import Addresses from '../Addresses/Addresses.js'
import AddAddress from '../AddAddress/AddAddress.js'
import AdminAddAddress from '../AdminAddAddress/AdminAddAddress.js'
import AddressSubmission from '../AddressSubmission/AddressSubmission.js'
import Users from '../Users/Users.js'
import Help from '../Help/Help.js'
import ListsForUsers from '../ListsForUsers/ListsForUsers.js'
import config from '../config'
import LandingPage from '../LandingPage/LandingPage.js'
import logo from '../Img/hometohome-Logo-3.png'
import HM from '../HM/HM.js'
import './App.css'


export default class App extends Component {
  state = {
    addresses: [],
    lists: [],
    newAddress: {
      hassError: false,
      touched: false,
      name: '',
    },
  }

  setAddresses = addresses => {
    this.setState({
      addresses
    })
  }
  
  setLists = lists => {
    this.setState({
      lists
    })
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/addresses`),
      fetch(`${config.API_ENDPOINT}/api/lists`),
    ])
      .then(([addressesRes, listsRes]) => {
        if (!addressesRes.ok) return addressesRes.json().then(e => Promise.reject(e))
        if (!listsRes.ok) return listsRes.json().then(e => Promise.reject(e))
        return Promise.all([addressesRes.json(), listsRes.json()])
      })
      .then(([addresses, lists]) => {
        this.setState({ addresses, lists })
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

  updateAddress = updatedAddress => {
    this.setState({
      addresses: this.state.addresses.map(ad =>
        (ad.id !== updatedAddress.id) ? ad : updatedAddress)
    })
  }

  handleDeleteAddress = addressId => {
    this.setState({
      addresses: this.state.addresses.filter(address => address.id !== addressId),
    })
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path = "/main" component={HomePage}/>
        <Route path = "/main/admin" component={Administration}/>
        <Route exact path = "/main/users" component={Users}/>
        <Route path = "/main/users/list/:listId" component={ListsForUsers}/>
        <Route path = "/main/address/:addressId" component={Addresses}/>
        <Route path = "/main/address-submission/:addressId" component={AddressSubmission}/>
        <Route path = "/add-address" component={AddAddress}/>
        <Route path = "/admin-add-address" component={AdminAddAddress}/>
        <Route path = "/edit-address/:addressId" component={EditAddress}/>
        <Route path = "/help" component={Help}/>
      </>
    )
  }

  render() {
    const contextValue = {
      addresses: this.state.addresses,
      lists: this.state.lists,
      addTeam: this.handleAddTeam,
      newTeam: this.state.newTeam,
      updateNewTeamName: this.updateNewTeamName,
      updateAddress: this.updateAddress,
      handleAddAddress: this.handleAddAddress,
      deleteAddress: this.handleDeleteAddress,
    }
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link className="navLink" to={"/main"}>
            <img className='logo img' src={logo} alt='Logo'/>
          </Link>
          <div className="topnav">
                <div className="hamburger">
                    <HM/>
                </div>
            </div>
        </nav>
        <main className='main'>
          <div>
              <HometoHomeContext.Provider value={contextValue}>
              <div className="App__link">
                <main className="App__main">{this.renderMainRoutes()}</main>
              </div>
              </HometoHomeContext.Provider>
          </div>
        </main>
        <div className='footer'>
          <footer className='App__footer'>
            <p className='footerText'>Share the Gospel with Your Neighbors</p>
          </footer>
        </div>
      </div>
    )
  }
}

