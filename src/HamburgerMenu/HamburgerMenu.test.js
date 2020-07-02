import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("HamburgerMenu component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <HamburgerMenu/></HometoHomeContext.Provider>);
    });
});