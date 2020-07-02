import React from 'react';
import HM from './HM';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("HM component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <HM/></HometoHomeContext.Provider>);
    });
});