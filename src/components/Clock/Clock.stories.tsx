import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Clock from "./Clock";


export default {
    title: 'Clock',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Clock>;


export const DigitalClockExample: ComponentStory<typeof Clock> = (args) => <Clock digital={true} />;
export const BoardClockExample: ComponentStory<typeof Clock> = (args) => <Clock digital={false} />;