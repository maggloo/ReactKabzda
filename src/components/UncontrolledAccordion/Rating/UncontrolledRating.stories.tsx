import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";
import {RatingValueType} from "../../Accordion/Rating/Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'unconrolled/UncontrolledRating',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledRating> = (args) => {
    return (
    <UncontrolledRating {...args} />
    )
}

const callback = action('rating changed');

export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
    onChange: callback
};

export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
    onChange: callback
};

export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3,
    onChange: callback
};
export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4,
    onChange: callback
};

export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5,
    onChange: callback
};



