import renderer from "react-test-renderer";

import CalendarComp from "../CalendarComp";

it("renders correctly", () => {
    const tree = renderer.create(<CalendarComp />).toJSON();
    expect(tree).toMatchSnapshot();
});
