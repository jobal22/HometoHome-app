import React from 'react';
import { shallow } from 'enzyme';
import AdminAddAddress from './AdminAddAddress';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('AdminAddAddress component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <AdminAddAddress />
      </HometoHomeContext.Provider>);
  });
});
