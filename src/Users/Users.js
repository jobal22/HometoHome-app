import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import {countAddressesForList} from '../address-helpers';
import './Users.css'

export default class Users extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }

    static contextType = HometoHomeContext;
    
    render() {
        const { addresses=[], lists=[] } = this.context
        return (
            <div className="Users">
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                <ul className="Users__list">
                {lists.map(list => 
                    <li key={list.id}>
                        <Link className='Users_list-link' key={list.id} to={`/main/users/list/${list.id}`}>
                            <span className='Users__num-addresses'>
                                {countAddressesForList(addresses, list.gpid, list.nsid)}
                            </span>

                            <h3>{list.name}</h3>
                        </Link>
                    </li>
                )}
                </ul>
            </div>
        )
    }
}
