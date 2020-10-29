import { useState, useEffect} from 'react'

export const useGetWorkDaysDB = database => {
    const [workdays, setworkdays] = useState(null)
    const [path, setPath] = useState(null)
    const [month, setMonth] = useState(null)
    const [days, setDays] = useState(null)
    const [hours, setHours] = useState(null)
    const [min, setMin] = useState(null)
    const [selectedHour, setSelectedHour] = useState(null)
    const [selectedMin, setSelectedMin] = useState(null)
    const [workPlace, setWorkPlace] = useState(null)
    const [workMonth, setWorkMonth] = useState(null)
    const [workDay, setWorkDay] = useState(null)


    function useGetMonth(e) {
        const place = e.target.value
        setWorkPlace(place)
        const dbRef = database.ref('workdays/' + place);
        dbRef.on('value', snapshot => {
            setMonth(snapshot.val())
            setPath('workdays/' + place + '/')
        })
    }

    function useGetDay(e) {
        const months = e.target.value
        setWorkMonth(months)
        const dbRef = database.ref(path + months);
        dbRef.on('value', snapshot => {
            setDays(snapshot.val())
            setPath(path + months + '/')
        })
    }

    function useGetHours(e) {
        const day = e.target.value
        setWorkDay(day)
        const dbRef = database.ref(path + day);
        dbRef.on('value', snapshot => {
            setHours(snapshot.val())
            setPath(path + day)
        })
    }

    function useGetMin(e) {
        const hour = e.target.value
        setSelectedHour(hour)
        const dbRef = database.ref(path);
        dbRef.on('value', snapshot => {
            setMin(snapshot.val())
        })
    }

    function useSetMin(e) {
        setSelectedMin(e.target.value)
    }

    useEffect(() => {
        const dbRef = database.ref('workdays');
        dbRef.on('value', snapshot => {
            setworkdays(snapshot.val())
        })
    }, [database])

    return {workdays ,month, days, hours, min, selectedHour, selectedMin , useGetMonth, useGetDay, useGetHours, useGetMin, useSetMin, path, workPlace, workMonth, workDay}
}


