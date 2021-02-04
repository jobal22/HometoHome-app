import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HometoHomeContext from '../Context/HometoHomeContext'
import './HomePage.css'
import adminLogo from '../Img/admin-Logo-3.png'
import usersLogo from '../Img/users-Logo-3.png'
import PropTypes from 'prop-types';
import config from '../config';


export default class HomePage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = HometoHomeContext;

    componentDidMount() {
      fetch("https://www.melissa.com/v2/lookups/addresssearch/?number=&street=roberts+rd&city=west+monroe&state=la&zip=71291&freeForm=&fmt=json&id=AXu2BWnHjT6az9c_JVCOVV**nSAcwXpxhQ0PC2lXxuDAZ-**", {
          method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `${config.API_KEY}`,
        }
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
          }
          console.log("DUMMY DUDE", res.json)
          return res.json()
        })
        .then(this.setBookmarks)
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
    }
    
    // componentDidMount() {
    //   this.setState({loading: true}, () => {
    //   Promise.all([
    //           fetch("https://www.melissa.com/v2/lookups/addresssearch/?number=&street=roberts+rd&city=west+monroe&state=la&zip=71291&freeForm=&fmt=json&id=AXu2BWnHjT6az9c_JVCOVV**nSAcwXpxhQ0PC2lXxuDAZ-**",)
    //   ])
    //   .then(res => {
    //           if (!res.ok) {
    //             return res.json().then(error => Promise.reject(error))
    //           }
    //           console.log("DUMMY DUDE", res.json)
    //           return res.json()
    //         })
    //         .then(this.setBookmarks)
    //         .catch(error => {
    //           console.error(error)
    //           this.setState({ error })
    //         })})
    // }
  

    render() {
        return (
            <div className='hpMain'>
                <div className='adminUser'>
                <section className='admin'>
                    <Link to={ '/main/admin'}>
                    <img className='adminLogo' src={adminLogo} alt='adminLogo'/>
                    </Link>
                </section>
                <section className='users'>
                    <Link to={ '/main/users'}>
                    <img className='usersLogo' src={usersLogo} alt='usersLogo'/>
                    </Link>
                </section>
                </div>
            </div>
        )
    }
}

HomePage.propTypes = {
    match: PropTypes.object
  }
