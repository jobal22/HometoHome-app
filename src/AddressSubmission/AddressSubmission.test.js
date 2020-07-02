import React from 'react';
import { shallow } from 'enzyme';
import AddressSubmission from './AddressSubmission';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('AddressSubmission component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <AddressSubmission />
      </HometoHomeContext.Provider>);
  });
});
