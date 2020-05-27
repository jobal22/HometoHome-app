import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import STORE from '../Store/dummy-store';
import HometoHomeContext from '../Context/HometoHomeContext'
import HomePage from '../HomePage/HomePage.js'
import Administration from '../Administration/Administration.js'
import Address from '../Address/Address.js'
import LandingPage from '../LandingPage/LandingPage.js'
import './App.css'


export default class App extends Component {
  // state = {
  //   addresses: [],
  //   lists: [],
  //   newAddress: {
  //     hassError: false,
  //     touched: false,
  //     name: '',
  //   },
  // }
  state = {
    store: STORE,
  };

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path = "/main" component={HomePage}/>
        <Route exact path = "/main/admin" component={Administration}/>
        <Route exact path = "/main/address/:addressId" component={Address}/>
      </>
    )
  }

  render() {
    const store = this.state;
    const contextValue = {
      addresses: this.state.addresses,
      lists: this.state.lists
    }
    return (
      <div>
        <nav className="App__nav" >
          <Link to={`/main`}>Nav</Link>
        </nav>
        <main>
          <div>
              <div>
                {/* <main>{this.renderMainRoutes()}</main> */}
              </div>
              <Route
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
              />

          </div>
        </main>
      </div>
    )
  }
}

