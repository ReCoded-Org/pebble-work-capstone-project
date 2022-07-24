import renderer from "react-test-renderer";

import SustainableGoals from "../SustainableGoals";

it("renders correctly", () => {
    const tree = renderer.create(<SustainableGoals />).toJSON();
    expect(tree).toMatchSnapshot();
});
