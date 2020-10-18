import { useState, useEffect} from 'react'

export const useClients = (database) => {
    const [clients, setclients] = useState(null)

    useEffect(() => {
        const dbRef = database.ref('Clients')
        dbRef.on('value', snapshot => {
            setclients(snapshot.val())
        })
    }, [database])
    return clients
    
} 