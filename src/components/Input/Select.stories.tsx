import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const NewSelect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NewSelect.args = {
    value: '1',
    onChange: action('value changed'),
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Kiev'},
    ]
};

export const WithValue = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('2');

    // Sets a click handler to change the label's value
    return <Select
        value={value}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Kiev'},
        ]}
        onChange={setValue}
    />;
};

export const WithoutValue = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState(null);

    // Sets a click handler to change the label's value
    return <Select
        value={value}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Kiev'},
        ]}
        onChange={setValue}
    />;
};

