import React from 'react';
import { shallow } from 'enzyme';
import HamburgerMenu from './HamburgerMenu';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('HamburgerMenu component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <HamburgerMenu />
      </HometoHomeContext.Provider>);
  });
});
