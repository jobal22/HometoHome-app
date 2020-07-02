import React from 'react';
import loadingSpinner from './loadingSpinner';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("loadingSpinner component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <loadingSpinner/></HometoHomeContext.Provider>);
    });
});