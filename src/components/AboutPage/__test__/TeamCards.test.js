import renderer from "react-test-renderer";

import TeamCards from "../TeamCards";

it("renders correctly", () => {
    const tree = renderer.create(<TeamCards />).toJSON();
    expect(tree).toMatchSnapshot();
});
