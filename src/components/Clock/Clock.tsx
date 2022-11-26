import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

type PropsType = {
    digital: boolean
}


function getTwoDigitsString(num: number) {
    return num < 10
        ? '0' + num
        : num
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date());
    const [digital, setDigital] = useState(true);

    useEffect(() => {
        setDigital(props.digital);
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);



        return () => {
            clearInterval(id)
        }
    }, []);

    const hours = getTwoDigitsString(date.getHours());
    const mins = getTwoDigitsString(date.getMinutes());
    const sec = getTwoDigitsString(date.getSeconds());

    const styleHourHand = {
        transform: `rotate(${(30*(+hours + (1/60) * +mins)) - 180}deg)`
    }
    const styleMinHand = {
        transform: `rotate(${(6*(+mins + (1/60) * +sec)) - 180}deg)`
    }
    const styleSecHand = {
        transform: `rotate(${+sec*6 - 180}deg)`
    }

    return (
        <div>
            {digital
                ? <div>
                    <span>{getTwoDigitsString(date.getHours())} : </span>
                    <span>{getTwoDigitsString(date.getMinutes())} : </span>
                    <span>{getTwoDigitsString(date.getSeconds())}</span>
                </div>
                : <div className={s.parentClock}>
                    <div className={s.hrs} style={styleHourHand}></div>
                    <div className={s.min} style={styleMinHand}></div>
                    <div className={s.sec} style={styleSecHand}></div>
                </div>
            }
        </div>
    );
};

export default Clock;