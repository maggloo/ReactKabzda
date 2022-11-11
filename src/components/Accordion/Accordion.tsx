import React from "react";
import UncontrolledAccordion from "../UncontrolledAccordion/UncontrolledAccordion";

type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[],
    onClick: (value: any) => void
}


const AccordionBody = React.memo(AccordionBodySecret);
const AccordionTitle = React.memo(AccordionTitleSecret);
const Accordion = React.memo(AccordionSecret);

function AccordionSecret(props: AccordionPropsType) {

     function setCollapse() {
         props.onChange(!props.collapsed);
     }
     return (
         <div>
             <AccordionTitle title={props.title} callBack={setCollapse}/>
             { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
         </div>
     )

}

type AccordionTitlePropsType = {
    title: string,
    callBack: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.callBack()}>{ props.title }</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: any) => void
}

function AccordionBodySecret(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, i) => <li key={i} onClick={() => {props.onClick(el.value)}}>{el.title}</li>)}
        </ul>
    )
}


export default Accordion;