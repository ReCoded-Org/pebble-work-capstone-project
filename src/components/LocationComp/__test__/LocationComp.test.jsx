import renderer from "react-test-renderer";

import LocationComp from "../LocationComp";

it("renders correctly", () => {
    const tree = renderer.create(<LocationComp />).toJSON();
    expect(tree).toMatchSnapshot();
});
