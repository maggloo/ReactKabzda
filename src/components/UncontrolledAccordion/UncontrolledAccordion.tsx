import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    title: string,
}

const UncontrolledAccordion = React.memo(AccordionSecret);
const AccordionTitle = React.memo(AccordionTitleSecret);
const AccordionBody = React.memo(AccordionBodySecret);

function AccordionSecret(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle title={props.title} callBack={ () => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
            { !state.collapsed && <AccordionBody /> }
        </div>
        )

}

type AccordionTitlePropsType = {
    title: string,
    callBack: () => void
}



function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log('ACC TITLE')
    return (
        <h3 onClick={props.callBack}>{ props.title }</h3>
    )
}

function AccordionBodySecret() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
