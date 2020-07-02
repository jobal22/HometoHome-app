import React from 'react';
import { shallow } from 'enzyme';
import AddressCard from './AddressCard';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('AddressCard component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <AddressCard />
      </HometoHomeContext.Provider>);
  });
});
