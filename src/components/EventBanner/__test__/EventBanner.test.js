import renderer from "react-test-renderer";

import EventBanner from "../EventBanner";

jest.mock("next/router", () => ({
    useRouter: () => ({
        query: { myProp: "myValue" },
    }),
}));

it("renders correctly", () => {
    const tree = renderer
        .create(
            <EventBanner
                title='This is some title This is some title This is some title'
                imageSrc='/images/sampleEventImage.jpg'
                city='Izmir'
                country='Turkey'
                address='11th Street South, Arlington, Virginia'
                dateTime='2022-01-03T00:00:00.000Z'
                attendees={[
                    "steve",
                    "jane",
                    "douglas",
                    "whatever",
                    "beyonce",
                    "bomm",
                ]}
                attendeeProfileURLs={[
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                ]}
                host='Jangis Khan'
                hostProfileURL='/images/sampleEventImage.jpg'
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
