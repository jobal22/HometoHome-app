import React from 'react';
import Help from './Help';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("Help component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <Help/></HometoHomeContext.Provider>);
    });
});