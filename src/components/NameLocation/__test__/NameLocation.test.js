import renderer from "react-test-renderer";

import NameLocation from "../NameLocation";

it("renders correctly", () => {
    const tree = renderer.create(<NameLocation />).toJSON();
    expect(tree).toMatchSnapshot();
});
