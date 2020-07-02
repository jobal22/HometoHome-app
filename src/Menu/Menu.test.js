import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('Menu component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <Menu />
      </HometoHomeContext.Provider>);
  });
});
