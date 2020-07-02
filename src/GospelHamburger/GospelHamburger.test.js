import React from 'react';
import GospelHamburger from './GospelHamburger';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("GospelHamburger component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <GospelHamburger/></HometoHomeContext.Provider>);
    });
});