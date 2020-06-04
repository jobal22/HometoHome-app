import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import STORE from '../Store/dummy-store';
import HometoHomeContext from '../Context/HometoHomeContext'
import './Users.css'
import PropTypes from 'prop-types'
import List from '../Lists/Lists.js';

export default class Users extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = HometoHomeContext;
    render() {
        const {addresses=[], lists=[]} = this.context
        // console.log('herehereher', this.context)
        return (
            <div className="users">
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                {lists.map(list => 
                    // <List
                    //     key={list.id}
                    //     id={list.id}
                    //     name={list.name}
                    //     addresses={list.addressIds.map(id => addresses[id])}
                    // />
                    <Link key={list.id} to={`/main/users/list/${list.id}`}>
                        <h3>{list.name}</h3>
                    </Link>
                )}
            </div>
        )
    }
}
