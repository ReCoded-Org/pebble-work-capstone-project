"use strict";

import renderer from "react-test-renderer";

import Signupin from "./Signupin";

it("renders correctly", () => {
    const tree = renderer.create(<Signupin title='Sign up' />).toJSON();
    expect(tree).toMatchSnapshot();
});
