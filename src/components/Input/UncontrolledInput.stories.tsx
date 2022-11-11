import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from "../Accordion/Accordion";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'input',
  // component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
}
// } as ComponentMeta<typeof input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<any> = (args) => <input {...args} />;

export const UncontrolledWithFixedValues = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledWithFixedValues.args = {
  value: 'input',
};


export const UncontrolledWithTrackingValue = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState<string>('');

  // Sets a click handler to change the label's value
  return <><input onChange={(e) => setValue(e.currentTarget.value)}/> {value}</>;
};


export const GetValueByButtonPress = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickSave = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }
  // Sets a click handler to change the label's value
  return <><input ref={inputRef} /><button onClick={onClickSave}>save</button> - {value}</>;
};

export const ControlledInput = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  // Sets a click handler to change the label's value
  return <><input value={value} onChange={onChangeHandler}/></>;
};


export const ControlledCheckbox = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState<boolean>(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }

  // Sets a click handler to change the label's value
  return <><input type='checkbox' checked={value} onChange={onChangeHandler}/></>;
};

export const ControlledSelect = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState<string | undefined>('2');

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  // Sets a click handler to change the label's value
  return <select value={value} onChange={onChangeHandler}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Moscow</option>
    <option value={'3'}>Kiev</option>
  </select>;
};



