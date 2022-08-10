import renderer from "react-test-renderer";

import EditInterests from "../EditInterests";

it("renders correctly", () => {
    const tree = renderer.create(<EditInterests />).toJSON();
    expect(tree).toMatchSnapshot();
});
