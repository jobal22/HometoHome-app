import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import './Users.css'

export default class Users extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }

    static contextType = HometoHomeContext;
    
    render() {
        const { lists=[] } = this.context
        return (
            <div className="users">
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                {lists.map(list => 
                    <Link key={list.id} to={`/main/users/list/${list.id}`}>
                        <h3>{list.name}</h3>
                    </Link>
                )}
            </div>
        )
    }
}
