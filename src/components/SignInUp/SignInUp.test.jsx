"use strict";

import renderer from "react-test-renderer";

import SignInUp from "./SignInUp";

it("renders correctly", () => {
    const tree = renderer.create(<SignInUp title='Sign up' />).toJSON();
    expect(tree).toMatchSnapshot();
});
