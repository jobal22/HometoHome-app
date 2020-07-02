import React from 'react';
import AddAddress from './AddAddress';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("AddAddress component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <AddAddress /></HometoHomeContext.Provider>);
    });
});