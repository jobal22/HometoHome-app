import React from 'react';
import { shallow } from 'enzyme';
import GospelMenu from './GospelMenu';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('GospelMenu component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <GospelMenu />
      </HometoHomeContext.Provider>);
  });
});
