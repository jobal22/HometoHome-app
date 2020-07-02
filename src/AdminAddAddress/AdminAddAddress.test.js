import React from 'react';
import AdminAddAddress from './AdminAddAddress';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("AdminAddAddress component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <AdminAddAddress /></HometoHomeContext.Provider>);
    });
});