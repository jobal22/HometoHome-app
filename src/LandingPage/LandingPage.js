import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import './LandingPage.css'


export class LandingPage extends Component {


  render() {

    return (
      <div className="Landing">
        {/* <nav className="Landing__nav" >Nav</nav> */}
        <main>
          <header className="Header">
            <h1>Home to Home</h1>
          </header>

          <section>
            <p>"Home to Home" helps you to better coordinator your neighborhood evangelism and outreach strategies and manage the contact information from each visit.</p>
            <p>"Home to Home" is divided into two sections: 1) Administration and 2) Users. The Administration section allows admin users to see the progress of addresses move through Lists based on the interaction with residents.</p>
            <p>The Users section allows users to access and update address information based on interactions with residents.</p>
            <p>The address database is updated based on admin request.</p>
            {/* <p>First, create address catalogs so that you can organize your addresses (ex. by State, City, and/or Subdivision. Second, select a catalog and add addresses to the catalog. Third, create teams. You can add addresses to each team through the Catalog section. Once your addresses are entered and organized. Your teams can click on the addresses assigned to their team. Each address has a form for the team members to fill out and submit. Once submitted, you will be able to began looking at the data collected. </p> */}
          </section>

          <div className="Landing__link">
            <Link className='homePage' to='/main'>Come On In!</Link>
            {/* <Route exact path="/main" component={HomePage}/> */}

          </div>
        </main>
        {/* <footer className="Landing__footer"></footer> */}
      </div>
    )
  }
}

export default LandingPage
