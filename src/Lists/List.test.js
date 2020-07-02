import React from 'react';
import Lists from './Lists';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("Lists component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <Lists/></HometoHomeContext.Provider>);
    });
});