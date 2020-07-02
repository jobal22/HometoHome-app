import React from 'react';
import { shallow } from 'enzyme';
import ListsForUsers from './ListsForUsers';
import HometoHomeContext from '../Context/HometoHomeContext';

describe('ListsForUsers component', () => {
  it('renders without crashing', () => {
    shallow(
      <HometoHomeContext.Provider >
        <ListsForUsers />
      </HometoHomeContext.Provider>);
  });
});
