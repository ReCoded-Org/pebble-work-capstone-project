import renderer from "react-test-renderer";

import EventBanner from "../EventBanner";

it("renders correctly", () => {
    const tree = renderer.create(<EventBanner />).toJSON();
    expect(tree).toMatchSnapshot();
});
