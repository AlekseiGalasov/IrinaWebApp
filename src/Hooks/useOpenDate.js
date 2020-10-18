import { useState } from 'react';

//set currnet date to choose workday


export function UseOpenDate() {
    const [OpenDate, SetOpenDate] = useState(new Date());
    return {OpenDate, SetOpenDate}
}