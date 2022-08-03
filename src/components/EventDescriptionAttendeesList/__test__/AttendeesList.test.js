import React from "react";
import renderer from "react-test-renderer";

import AttendeesList from "../AttendeesList";

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
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
