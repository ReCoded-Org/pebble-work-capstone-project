import renderer from "react-test-renderer";

import EventCards from "../EventCards";

it("renders correctly", () => {
    const tree = renderer.create(<EventCards />).toJSON();
    expect(tree).toMatchSnapshot();
});
