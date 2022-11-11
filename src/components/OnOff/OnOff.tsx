import React, {useState} from "react";

export type PropsType = {
    value: boolean,
    onClick: (value: boolean) => void
}


export const OnOff = React.memo(OnOffSecret);

function OnOffSecret(props: PropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red',
    };

    return(
        <div>
            <div style={onStyle} onClick={() => {props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onClick(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}