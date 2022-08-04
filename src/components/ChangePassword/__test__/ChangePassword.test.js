import React from "react";
import renderer from "react-test-renderer";

import ChangePassword from "../ChangePassword";

it("renders correctly", () => {
    const tree = renderer.create(<ChangePassword />).toJSON();
    expect(tree).toMatchSnapshot();
});
