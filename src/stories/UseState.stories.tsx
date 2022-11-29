import React, {useEffect, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import {Select} from "../components/Input/Select";

export default {
  title: 'UseState&UseEffect',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

function generateData() {
  console.log('generate data');
  return 120;
}

export const UseStateExample = () => {
  //useState вызывает функцию только 1 раз (а примитивы каждый раз!)
  const [counter, setCounter] = useState(generateData);

  const changer = (state: number) => state + 1;
  return <>
  <button onClick={() => setCounter(changer)}>+</button>
    {counter}
  </>
};

export const UseEffectExample = () => {
  //useState вызывает функцию только 1 раз (а примитивы каждый раз!)
  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);

  useEffect(()=> {
    document.title = counter.toString();
  }) //every render

  useEffect(()=> {
    document.title = counter.toString();
  }, [counter]) // first render and every counter change

  useEffect(()=> {
    document.title = counter.toString();
  }, []) //only first render 'component did mount'

  return <>
    <button onClick={() => setFake( fake + 1)}>Fake</button>
    <button onClick={() => setCounter( counter + 1)}>Counter</button>
    {counter} {fake}
  </>
};



export const ResetUseEffect = () => {
  const [counter, setCounter] = useState(1);
  console.log('Component rendered');

  useEffect(()=> {
    console.log('Effect')
    return () => {
      console.log('reset effect')
    }
  }, [counter]) //only first render 'component did mount'

  return <>
    Hello, counter: {counter}
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </>
}


export const KeysTrackerExample = () => {
  const [text, setText] = useState('');

  useEffect(()=> {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key)
      setText(text + e.key);
    }

    window.document.addEventListener('keypress', handler)

    return () => {
      window.document.removeEventListener('keypress', handler)
    }
  }, [text]) //only first render 'component did mount'

  return <>
    Typed text: {text}
  </>
}

/*
export const setTimeoutExample = () => {
  //useState вызывает функцию только 1 раз (а примитивы каждый раз!)
  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);

  useEffect(()=> {
    setInterval(() => {
      console.log(counter)
      setCounter((state) => state + 1);
    }, 1000)

  }, []) //every render

  return <>
    Hello, counter: {counter}
  </>
};*/
