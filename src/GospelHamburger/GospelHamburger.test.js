import React from 'react';
import { shallow } from 'enzyme';
import GospelHamburger from './GospelHamburger';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('GospelHamburger component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <GospelHamburger />
      </HometoHomeContext.Provider>);
  });
});
