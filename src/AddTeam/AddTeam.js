import React, { Component } from 'react';
import config from '../config';
import HometoHomeContext from '../Context/HometoHomeContext'
import ValidationError from '../ValidationError/validationError';
import './AddTeam.css';
import PropTypes from 'prop-types';
// import NotefulForm from '../NotefulForm/NotefulForm'

export default class AddFolder extends Component {
    static contextType = HometoHomeContext;

  //TRIAL
//   handleSubmit = event => {
//     event.preventDefault(event);
//     const newFolder = event.target.newFolder.value;
//     // this.addFolder(newFolder);
//     // this.props.history.goBack();

//     if (newFolder === '') {
//       return
//     }

//     fetch(`${config.API_ENDPOINT}/folders/`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({newFolder})
//     }
//   )
//   // .then(resp => resp.json())
//   // .then(data => this.context.addFolder(data))
//   .then(res => {
//     if (!res.ok)
//       return res.json().then(e => Promise.reject(e))
//     return res.json()
//   })
//   .then(folder => {
//     const newArray = this.context.addFolder(folder)
//     this.props.history.push(`/`)
//   })
//   .catch(error => {
//     console.error({ error })
//   })
// }
  




  addTeam = (name) => {
    fetch(`${config.API_ENDPOINT}/api/teams/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({name})
      }
    )
    // .then(resp => resp.json())
    // .then(data => this.context.addFolder(data))
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    // .then(folder => {
    //   this.context.addFolder(folder)
    //   this.props.history.push(`/`)
    // })
    .catch(error => {
      console.error({ error })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTeam = event.target.newTeam.value;
    this.addTeam(newTeam);
    // this.props.history.goBack();
  }

  updateTeamName(e) {
    const newName = e.target.value;
      this.context.updateNewTeamName(newName);
  }

  validateTeamName() {
    if (this.context.newTeam.name.trim() === 0) {
      return 'Must be more than 0 characters.'
    } else if ( this.context.newTeam.name.trim().length <= 2 ) {
      return 'Must be more than 2 characters.'
    }
  }

  render() {
    const fold = this.validateTeamName();
    return(
      <>
        <header>
          <h2 className='add-team-header'>Create A New Team</h2>
        </header>
        <form className="add-team-form" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="newTeam">
          Name:
        {this.context.newTeam.touched && <ValidationError message = {fold}/>}  
        </label>
        <input
        type="text"
        name="newTeam"
        id="newTeam"
        aria-required="true"
        aria-label="Name"
        onChange={(e) => this.updateTeamName(e)}/>
        <button type="submit">Submit</button>
      </form>
      </>
    )
  }
}

AddFolder.propTypes = {
  history: PropTypes.object
}