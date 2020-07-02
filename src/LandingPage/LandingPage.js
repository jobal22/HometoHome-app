import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export class LandingPage extends Component {
  render() {
    return (
      <div className="Landing">
        <main>
          <header className="lp-header">
            <h1>Welcome!</h1>
          </header>
          <section className="lpInfo">
            <p>"Home to Home" helps you to better coordinator your neighborhood evangelism and outreach strategies and manage the contact information from each visit.</p>
            <p>"Home to Home" is divided into two sections: 1) Administration and 2) Users. The Administration section allows admin users to see the progress of addresses move through Lists based on the interaction with residents.</p>
            <p>The Users section allows users to access and update address information based on interactions with residents.</p>
            <p>The address database is updated based on admin request.</p>
          </section>
          <div className="Landing__link">
            <Link className='landToHome' to='/main'>Come On In!</Link>
          </div>
        </main>
      </div>
    )
  }
}

export default LandingPage;
