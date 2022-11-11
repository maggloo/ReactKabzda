import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";
import Accordion from "../Accordion/Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'unconrolled/UncontrolledAccordion',
    component: UncontrolledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => {
    return (
    <UncontrolledAccordion {...args} />
    )
}

export const ModeChanging = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModeChanging.args = {
    title: 'Menu'
};

export const DefaultInputValue = () => {
    // Sets the hooks for both the label and primary props

    // Sets a click handler to change the label's value
    return <input defaultValue={'yo'} />;
};
