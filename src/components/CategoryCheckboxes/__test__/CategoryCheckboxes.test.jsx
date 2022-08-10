import renderer from "react-test-renderer";

import CategoryCheckboxes from "../CategoryCheckboxes";

it("renders correctly", () => {
    const tree = renderer.create(<CategoryCheckboxes />).toJSON();
    expect(tree).toMatchSnapshot();
});
