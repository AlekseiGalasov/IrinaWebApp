import { useState } from 'react';

//set different datas like (date, time, place) to push work days,place and time to DB 

export function useDateAndTime() {
    const [date, setDate] = useState('1');
    const [fromTime, setFromTime] = useState('0');
    const [toTime, setToTime] = useState('0');
    const [place, setPlace] = useState("MahtraTee18");

    function changeDates(e) {
        switch (e.target.name) {
            case 'day':
                setDate(e.target.value.split(','));
                break;
            case 'fromTime':
                setFromTime(e.target.value);
                break;
            case 'toTime':
                setToTime(e.target.value);
                break;
            case 'place':
                setPlace(e.target.value);
                break;
            default:
                return null;
    }
}

    return({date, fromTime, toTime, place, changeDates})
}