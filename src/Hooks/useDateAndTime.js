import { useState } from 'react';

//set different datas like (date, time, place) to push work days,place and time to DB 

export function useDateAndTime() {
    const [date, setDate] = useState();
    const [fromTime, setFromTime] = useState();
    const [toTime, setToTime] = useState();
    const [place, setPlace] = useState();

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