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


    return (
        <div className={s.wrapper}>
            {digital
                ? <DigitalClockView date={date}/>
                : <AnalogClockView date={date}/>
            }
        </div>
    );
};

export default Clock;

export type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <div>
        <span>{getTwoDigitsString(date.getHours())} : </span>
        <span>{getTwoDigitsString(date.getMinutes())} : </span>
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </div>
}

export const AnalogClockView: React.FC<ClockViewPropsType>  = ({date}) => {
    const styleHourHand = {
        transform: `rotate(${(30 * (date.getHours() + (1 / 60) * date.getMinutes())) - 180}deg)`
    }
    const styleMinHand = {
        transform: `rotate(${(6 * (date.getMinutes() + (1 / 60) * date.getSeconds())) - 180}deg)`
    }
    const styleSecHand = {
        transform: `rotate(${date.getSeconds() * 6 - 180}deg)`
    }

    return <div className={s.parentClock}>
        <div className={s.hrs} style={styleHourHand}></div>
        <div className={s.min} style={styleMinHand}></div>
        <div className={s.sec} style={styleSecHand}></div>
    </div>
}