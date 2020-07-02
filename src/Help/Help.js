import React, { Component } from 'react';
import admin from '../Img/h2h-Admin.png';
import users from '../Img/h2h-Users.png';
import usersTeams from '../Img/h2h-Users-Teams.png';
import submissionForm from '../Img/h2h-AddressSubmission.png';
import gospel from '../Img/h2h-GospelInfo.png';
import './Help.css';

export default class Help extends Component {
    render() {
        return (
          <div className='Help'>
            <header className="Header">
              <h1>Navigation Help</h1>
            </header>
            <div className='HelpInfo'>
              <h2 className='helpTitle'>Administration</h2>
              <section className='helpF'>
                <h3 >Administration Features</h3>
                <p className='helpP'>
                  The Administration section allows admin-users to see the progress 
                  of addresses as they move through Lists based on the interaction 
                  with residents. The Administration section also allows admin-users 
                  to add, edit, and remove addresses.
                </p>
                <p className='helpP'>
                  There are four List (<b>Unengaged Addresses</b>, 
                  <b>Follow-Up: Needs Gospel</b>,
                  <b>Follow-Up: Heard Gospel</b>,
                  <b>Engaged with Salvations</b>).
                  As the Usersinteract with each home and update the 'address information,' the
                  address will pass into a different list depending on the Users'
                  interaction with the Residents.
                </p>
                <img src={admin} alt='Admin' className='helpImg'/>
                <p className='helpP'>
                  The 
                  <b>Unengaged Addresses List</b>
                  contains addresses where the 'Gospel Presentation'
                  is set to 'N/A' and 'New Salvations' is set to '0'.
                </p>
                <p className='helpP'>
                    The 
                    <b>Follow-Up: Needs Gospel List</b>
                    contains addresses where the 'Gospel Presentation'
                    is set to 'no' and 'New Salvations' is set to '0'.
                </p>
                <p className='helpP'>
                    The 
                    <b>Follow-Up: Heard Gospel List</b>
                    contains addresses where the 'Gospel Presentation'
                    is set to 'yes' and 'New Salvations' is set to '0'.
                </p>
                <p className='helpP'>
                    The 
                    <b>Engaged with Salvations List</b>
                    contains addresses where the 'Gospel Presentation'
                    is set to 'yes' and 'New Salvations' is set to '1'.
                </p>
              </section>
            </div>
            <div className='HelpInfo'>
              <h2>Users</h2>
              <section className='helpF'>
                <h3 >Users Features</h3>
                <p className='helpP'>
                  The Users section allows users to access and update address information 
                  based on interactions with residents. The Users section also allows users 
                  to access Gospel information to help them communicate more clearly to each 
                  set of residents.
                </p>
                <p className='helpP'>
                  There are four Teams (<b>Unengaged Addresses</b>, <b>Follow-Up: Needs Gospel</b>, <b>Follow-Up: 
                  Heard Gospel</b>, <b>Engaged with Salvations</b>). To the right of 
                  the team's title, a number displays how many addresses are in each Team. Each Team contains
                  addresses that allow Users to update address information based on their interaction
                  with residents.
                </p>
                <img src={users} alt='Users' className='helpImg'/>
                <p></p>
                <img src={usersTeams} alt='Users-Teams' className='helpImg'/>
                <p className='helpP'>
                  The User can click on a specific address within a Team in order to access the address' 
                  submission-form. Once in the Submission Form, the user can update the address' information 
                  based on the conversation that the user has with the resident(s).
                </p>
                <img src={submissionForm} alt='Submission-Form' className='helpImg'/>
                <p className='helpP'>
                  Within the Submission Form, a menu will display a Gospel Presentation once clicked. The 
                  Gospel Presentation provides three topics: 1) The Problem, 2) The Solution, and 3) The 
                  Invitation. If the user clicks a topic, a box will display containing a Bible verse to 
                  help the user communicate the Gospel to the resident(s).
                </p>
                <img src={gospel} alt='Gospel' className='helpImg'/>
              </section>
            </div>
        </div>
    )
  }
}
