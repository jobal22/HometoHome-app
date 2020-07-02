import React from 'react';
import Menu from './Menu';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("Menu component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <Menu/></HometoHomeContext.Provider>);
    });
});