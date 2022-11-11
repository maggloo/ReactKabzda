import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, RatingValueType} from "../Accordion/Rating/Rating";
import {OnOff, PropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => {
    return (
    <OnOff {...args} />
    )
}

export const ModeChanging = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState<boolean>(false);

    // Sets a click handler to change the label's value
    return <OnOff value={value} onClick={setValue}/>;
};

export const OnMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMode.args = {
    value: true,
    onClick: action('on or off clicked')
};

export const OffMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OffMode.args = {
    value: false,
    onClick: action('on or off clicked')
};
