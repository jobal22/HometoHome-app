import React from 'react';
import GHM from './GHM';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("GHM component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <GHM/></HometoHomeContext.Provider>);
    });
});