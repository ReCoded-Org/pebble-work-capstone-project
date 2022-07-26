import renderer from "react-test-renderer";

import InputComponent from "../InputComponent";

it("renders correctly", () => {
    const tree = renderer.create(<InputComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
