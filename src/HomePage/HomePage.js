import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import './HomePage.css'
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
            <div>
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                <section>
                    <Link to={ '/main/admin'}>Administration</Link>
                </section>

                <section>
                    <Link to={ '/main/users'}>Users</Link>
                </section>

            </div>
        )
    }
}

HomePage.propTypes = {
    match: PropTypes.object
  }
