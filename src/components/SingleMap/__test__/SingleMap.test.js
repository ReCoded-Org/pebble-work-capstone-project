import renderer from "react-test-renderer";

import SingleMap from "../SingleMap";

it("renders correctly", () => {
    const tree = renderer.create(<SingleMap />).toJSON();
    expect(tree).toMatchSnapshot();
});
