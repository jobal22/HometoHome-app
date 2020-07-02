import React from 'react';
import { shallow } from 'enzyme';
import Administration from './Administration';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('Administration component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <Administration />
      </HometoHomeContext.Provider>);
  });
});
