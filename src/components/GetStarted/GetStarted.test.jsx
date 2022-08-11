import React from "react";
import renderer from "react-test-renderer";

import GetStarted from "./GetStarted";

it("renders correctly", () => {
    const tree = renderer.create(<GetStarted />).toJSON();
    expect(tree).toMatchSnapshot();
});
