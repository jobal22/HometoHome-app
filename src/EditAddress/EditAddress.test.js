import React from 'react';
import { shallow } from 'enzyme';
import EditAddress from './EditAddress';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('EditAddress component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <EditAddress/>
      </HometoHomeContext.Provider>);
  });
});
