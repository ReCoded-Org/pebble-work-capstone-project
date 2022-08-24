import renderer from "react-test-renderer";

import Pagination from "../Pagination";

it("renders correctly", () => {
    const tree = renderer.create(<Pagination />).toJSON();
    expect(tree).toMatchSnapshot();
});
