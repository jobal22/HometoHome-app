import React, { Component } from  'react';
import PropTypes from 'prop-types';
import HometoHomeContext from '../Context/HometoHomeContext';
// import config from '../config'
import './AddressSubmit.css';

const Required = () => (
  <span className='AddressSubmit__required'>*</span>
)

class AddressSubmit extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  static contextType = HometoHomeContext;

  state = {
    error: null,
  };

  handleSubmit = () => {
    console.log('button clicked!')
  }

  handleClickCancel = () => {
    this.props.history.push('/main/admin')
  };

  render() {
    const { error } = this.state
    return (
      <section className='AddressSubmit'>
        <form
          className='AddressSubmit__form'
          onSubmit={this.handleSubmit}
        >
          <div className='AddressSubmit__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor='name'>
              Name
              {' '}
              <Required />
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Brad Tyler'
              required
            />
          </div>
          <div>
            <label htmlFor='number'>
              Phone:
              {' '}
            </label>
            <input
              type='text'
              name='number'
              id='number'
              placeholder='123-345-6789'
            />
          </div>
          <div>
            <label htmlFor='gospel'>
              Was the Gospel presented?
              {' '}
              <Required />
            </label>
            <label>
                <input type="radio" name="gospel" value="Yes" /> Yes {' '}
                <input type="radio" name="gospel" value="No" required/> No
            </label>
          </div>
          <div>
            <label htmlFor='salvation'>
              Were there new professions of faith?
              {' '}
              <Required />
            </label>
            <input
              type='number'
              name='salvation'
              id='salvation'
              defaultValue='0'
              min='0'
              max='20'
              required
            />
          </div>
          <div>
            <label htmlFor='notes'>
              Notes
            </label>
            <textarea
              name='notes'
              id='notes'
            />
          </div>
          <div className='AddressSubmit__buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit'>
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddressSubmit;