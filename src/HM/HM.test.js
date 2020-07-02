import React from 'react';
import { shallow } from 'enzyme';
import HM from './HM';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('HM component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <HM />
      </HometoHomeContext.Provider>);
  });
});
