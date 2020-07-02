import React from 'react';
import { shallow } from 'enzyme';
import AddAddress from './AddAddress';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('AddAddress component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <AddAddress />
      </HometoHomeContext.Provider>);
  });
});
