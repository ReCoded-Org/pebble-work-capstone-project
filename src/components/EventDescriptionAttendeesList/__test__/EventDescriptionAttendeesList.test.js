import React from "react";
import renderer from "react-test-renderer";

import EventDescriptionAttendeesList from "../EventDescriptionAttendeesList";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <EventDescriptionAttendeesList
                description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,'
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
