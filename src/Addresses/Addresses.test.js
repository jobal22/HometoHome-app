import React from 'react';
import { shallow } from 'enzyme';
import Addresses from './Addresses';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('Addresses component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <Addresses />
      </HometoHomeContext.Provider>);
  });
});
