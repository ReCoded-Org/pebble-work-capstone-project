import React from "react";
import renderer from "react-test-renderer";

import AttendeesList from "../AttendeesList";

jest.mock("next/router", () => ({
    useRouter: () => ({
        query: { myProp: "myValue" },
    }),
}));

it("renders correctly", () => {
    const tree = renderer
        .create(
            <AttendeesList
                attendees={[
                    "Bob",
                    "Jane",
                    "Steve",
                    "Ahmet",
                    "Mehmet",
                    "Jennifer",
                    "Somebody",
                    "Nobody",
                    "Beyonce",
                    "Cher",
                    "Madonna",
                    "The Rock",
                ]}
                attendeeProfileURLs={[
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                    "/images/sampleEventImage.jpg",
                ]}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
