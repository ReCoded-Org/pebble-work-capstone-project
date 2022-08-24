"use strict";

import renderer from "react-test-renderer";

import SignUp from "./SignUp";

it("renders correctly", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
});
