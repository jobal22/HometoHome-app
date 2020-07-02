import React from 'react';
import ListsForUsers from './ListsForUsers';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("ListsForUsers component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <ListsForUsers /></HometoHomeContext.Provider>);
    });
});