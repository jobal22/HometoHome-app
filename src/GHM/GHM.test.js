import React from 'react';
import { shallow } from 'enzyme';
import GHM from './GHM';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('GHM component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <GHM />
      </HometoHomeContext.Provider>);
  });
});
