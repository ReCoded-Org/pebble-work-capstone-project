"use strict";

import renderer from "react-test-renderer";

import Signupin from "./SignInUp";

it("renders correctly", () => {
    const tree = renderer.create(<Signupin title='Sign up' />).toJSON();
    expect(tree).toMatchSnapshot();
});
