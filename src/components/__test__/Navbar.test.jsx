"use strict";

import renderer from "react-test-renderer";

import Navbar from "../Navbar";

jest.mock("next/router", () => ({
    useRouter: () => ({
        query: { myProp: "myValue" },
    }),
}));

it("renders correctly", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});
