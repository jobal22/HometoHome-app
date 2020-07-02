import React from 'react';
import { shallow } from 'enzyme';
import Lists from './Lists';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('Lists component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <Lists />
      </HometoHomeContext.Provider>);
  });
});
