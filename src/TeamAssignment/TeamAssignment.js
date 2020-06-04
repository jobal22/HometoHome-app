import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import { findAddress } from '../address-helpers.js'
import PropTypes from 'prop-types'

export default class TeamAssignment extends Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        },
        match: {
          params: {}
        }
      }
      static contextType = HometoHomeContext;
    render() {
        // const {teams} = this.context
        // console.log('1234', teams)
        return (
            <div>
                
            </div>
        )
    }
}
