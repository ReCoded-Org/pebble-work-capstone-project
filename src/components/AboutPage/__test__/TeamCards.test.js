import renderer from "react-test-renderer";

import TeamCards from "../TeamCards";

it("renders correctly", () => {
    const tree = renderer
        .create(<TeamCards imageLink='/images/user.png' />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
