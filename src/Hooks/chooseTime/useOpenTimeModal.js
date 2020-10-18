import {useState} from 'react'

export function useOpenTimeModal() {
    const [timeModal, setTimeModal] = useState(false);
    return({timeModal, setTimeModal})
}