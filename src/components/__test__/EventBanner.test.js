import renderer from "react-test-renderer";

import EventBanner from "../EventBanner";

it("renders correctly", () => {
    const tree = renderer.create(<EventBanner attendees={["April", "Bob", "Sue", "Jimbo"]} />).toJSON();
    expect(tree).toMatchSnapshot();
});
{/* <EventBanner
                title='Izmir Clean Energy Brainstorming and Slashing Things Up Meetup (with a very long title)'
                imageSrc='/images/sampleEventImage.jpg'
                city='Izmir, Turkey'
                neighborhood='Mimar Sinan Mahallesi'
                address='26 Ağustos Kapısı'
                attendees={["April", "Bob", "Sue", "Jimbo"]}
                host='Jangis M.'
            /> */}
