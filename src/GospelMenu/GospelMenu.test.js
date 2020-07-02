import React from 'react';
import GospelMenu from './GospelMenu';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("GospelMenu component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <GospelMenu/></HometoHomeContext.Provider>);
    });
});