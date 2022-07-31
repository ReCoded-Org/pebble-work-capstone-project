import renderer from "react-test-renderer";

import ChooseLocationAndEventType from "../ChooseLocationAndEventType";

it("renders correctly", () => {
    const tree = renderer.create(<ChooseLocationAndEventType />).toJSON();
    expect(tree).toMatchSnapshot();
});
