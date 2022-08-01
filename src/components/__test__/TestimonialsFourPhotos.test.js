import renderer from "react-test-renderer";

import TestimonialsFourPhotos from "../TestimonialsFourPhotos";

it("renders correctly", () => {
    const tree = renderer.create(<TestimonialsFourPhotos />).toJSON();
    expect(tree).toMatchSnapshot();
});
