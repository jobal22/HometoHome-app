import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './loadingSpinner';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('loadingSpinner component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <LoadingSpinner />
      </HometoHomeContext.Provider>);
  });
});
