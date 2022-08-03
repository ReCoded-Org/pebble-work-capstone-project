import renderer from "react-test-renderer";

import EventCreation from "../EventCreation";

it("renders correctly", () => {
    const tree = renderer.create(<EventCreation />).toJSON();
    expect(tree).toMatchSnapshot();
});
