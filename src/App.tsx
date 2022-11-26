import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Accordion/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledAccordion/Rating/UncontrolledRating";
import {ItemType, Select} from "./components/Input/Select";
import Accordion from "./components/Accordion/Accordion";
import Clock from "./components/Clock/Clock";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(true)
    const [valueOnChange, setValueOnChange] = useState<ItemType>({title: 'Rita', value: 1});


    return (
        <div>
            <OnOff value={on} onClick={setOn}/>
            <UncontrolledAccordion title={'Hello'} />
            <Clock digital={false}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={'App'} collapsed={accordionCollapsed} onChange={setAccordionCollapsed} onClick={() => {}} items={[]}/>
            <Select value={valueOnChange}
                    onChange={setValueOnChange}
                    items={[
                        {title: 'Rita', value: 1},
                        {title: 'Masha', value: 2},
                        {title: 'Lera', value: 3}]}
            />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
