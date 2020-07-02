import React from 'react';
import { shallow } from 'enzyme';
import Help from './Help';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('Help component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <Help />
      </HometoHomeContext.Provider>);
  });
});
