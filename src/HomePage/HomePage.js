import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import './HomePage.css'
import adminLogo from '../Img/admin-Logo.png'
import usersLogo from '../Img/user-Logo.png'
import PropTypes from 'prop-types'

export default class HomePage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = HometoHomeContext;

    render() {
        return (
            <div className='hpMain'>
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                <section className='admin'>
                    <Link to={ '/main/admin'}>
                    <img className='adminLogo' src={adminLogo} alt='adminLogo'/>
                        Administration
                    </Link>
                </section>
                <section className='users'>
                    <Link to={ '/main/users'}>
                    <img className='usersLogo' src={usersLogo} alt='usersLogo'/>
                    </Link>
                </section>
            </div>
        )
    }
}

HomePage.propTypes = {
    match: PropTypes.object
  }
