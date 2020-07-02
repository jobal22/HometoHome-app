import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Administration from './Administration';

describe("Administration component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Administration />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
    });
});