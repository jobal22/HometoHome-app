import React from 'react';
import AddressCard from './AddressCard';
import HometoHomeContext from '../Context/HometoHomeContext'
import { shallow } from 'enzyme';

describe("AddressCard component", () => {
  it("renders without crashing", () => {
    shallow(
    <HometoHomeContext.Provider >
    <AddressCard/></HometoHomeContext.Provider>);
    });
});