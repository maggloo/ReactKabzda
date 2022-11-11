import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => {
    return (
    <Accordion {...args} />
    )
}
const onClick = action('some Item was clicked')

export const ModeChanging = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState<boolean>(true);

    // Sets a click handler to change the label's value
    return <Accordion title={'Users'} collapsed={value} onChange={() => setValue(!value)} items={[{title: 'Rita', value: 1}, {title: 'Masha', value: 2}, {title: 'Lera', value: 3}]} onClick={onClick}/>;
};

export const CollapsedMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    onClick: action('accordion mode change event type'),
    items: [],
};

export const UncollapsedMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncollapsedMode.args = {
    title: 'Users',
    collapsed: false,
    onClick: action('accordion mode change event type'),
    items: [{title: 'Rita', value: 1}, {title: 'Masha', value: 2}, {title: 'Lera', value: 3}],
};
