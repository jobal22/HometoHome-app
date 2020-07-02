import React from 'react';
import Addresses from './Addresses';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("Addresses component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <Addresses /></HometoHomeContext.Provider>);
    });
});