import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({
  adapter: new Adapter(),
});

describe("Testing for App component", () => {
  test("Testing component rendering", () => {
    const wrapper = shallow(<App />);
  });
});
