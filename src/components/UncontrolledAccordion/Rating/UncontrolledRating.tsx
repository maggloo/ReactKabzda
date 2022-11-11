import React, {useState} from "react";
import {RatingValueType} from "../../Accordion/Rating/Rating";
type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: RatingValueType,
    onChange?: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {

    let [rating, setRating] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);
    function onClickHandler(value: RatingValueType) {
        setRating(value);
        if (props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <div>
            <Star selected={rating > 0} callBack={() => onClickHandler(1)}/>
            <Star selected={rating > 1} callBack={() => onClickHandler(2)}/>
            <Star selected={rating > 2} callBack={() => onClickHandler(3)}/>
            <Star selected={rating > 3} callBack={() => onClickHandler(4)}/>
            <Star selected={rating > 4} callBack={() => onClickHandler(5)}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean,
    callBack: () => void
}

const Star = React.memo(StarSecret);

function StarSecret(props: StarPropsType) {
    return <span onClick={props.callBack}> {props.selected ? <b>star</b> : 'star'} </span>
}