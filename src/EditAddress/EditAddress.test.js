import React from 'react';
import EditAddress from './EditAddress';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("EditAddress component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <EditAddress/></HometoHomeContext.Provider>);
    });
});