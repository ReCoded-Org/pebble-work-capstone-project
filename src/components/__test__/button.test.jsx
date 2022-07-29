"use strict";

import renderer from "react-test-renderer";

import Button from "../Button";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <Button
                label='Get started'
                bgColor='bg-secondary-300'
                textColor='text-white'
                fontWeight='font-normal'
                height='h-8'
                width='w-30'
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
