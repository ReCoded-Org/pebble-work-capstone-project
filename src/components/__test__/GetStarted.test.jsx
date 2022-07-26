"use strict";

import renderer from "react-test-renderer";

import Getstarted from "../Getstarted";

it("renders correctly", () => {
    const tree = renderer.create(<Getstarted />).toJSON();
    expect(tree).toMatchSnapshot();
});
