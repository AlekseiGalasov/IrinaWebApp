import {useState} from 'react'

export function useAuthModal() {
    const [auth, setAuthModal] = useState(false);

    return({auth, setAuthModal})
}