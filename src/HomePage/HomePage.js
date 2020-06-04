import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import STORE from '../Store/dummy-store';
import HometoHomeContext from '../Context/HometoHomeContext'
import Administration from '../Administration/Administration.js'
import './HomePage.css'
import PropTypes from 'prop-types'
import Lists from '../Lists/Lists.js';



export default class HomePage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = HometoHomeContext;

    render() {
        // const store = this.props.store
        // console.log('check it', this.props.store.store.lists)
        const {addresses=[], lists=[]} = this.context
        console.log('asdfasfasd', this.context)

        return (
            <div>
                <header className="Header">
                    <h1>Home to Home</h1>
                </header>
                {/* {lists.map(list => 
                    <List
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        addresses={list.addressIds.map(id => addresses[id])}
                    />
                )} */}

                {/* {this.props.store.store.lists.map(list =>
                    <p>{list.name}</p>)} */}
                {/* {this.props.store.store.lists.map(list => 
                    <List
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        addresses={list.addressIds.map(id => this.props.store.store.addresses[id])}
                    />
                )} */}
                <section>
                    <Link to={ '/main/addresses'}>Addresses</Link>
                </section>

                <section>
                    <Link to={ '/main/admin'}>Administration</Link>
                </section>

                <section>
                    <Link to={ '/main/adminteams'}>Admin-Teams</Link>
                </section>

            </div>
        )
    }
}

HomePage.propTypes = {
    match: PropTypes.object
  }
