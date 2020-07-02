import React from 'react';
import AddressSubmission from './AddressSubmission';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("AddressSubmission component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <AddressSubmission /></HometoHomeContext.Provider>);
    });
});