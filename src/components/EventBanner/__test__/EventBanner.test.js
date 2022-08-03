import renderer from "react-test-renderer";

import EventBanner from "../EventBanner";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <EventBanner
                title='This is some title This is some title This is some title'
                imageSrc='/images/sampleEventImage.jpg'
                city='Izmir'
                neighborhood='Torbaci'
                address='11th Street South, Arlington, Virginia'
                attendees={[
                    "steve",
                    "jane",
                    "douglas",
                    "whatever",
                    "beyonce",
                    "bomm",
                ]}
                host='Jangis Khan'
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
