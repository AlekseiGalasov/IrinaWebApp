import { useState, useEffect} from 'react'
import { MonthName} from '../../Components/Functions/secondaryFunctions'

export const useGetWorkDaysDB = database => {
    const [workdays, setworkdays] = useState(null)
    const [path, setPath] = useState(null)
    const [month, setMonth] = useState(null)
    const [days, setDays] = useState(null)
    const [hours, setHours] = useState(null)
    const [min, setMin] = useState(null)


    function useGetMonth(e) {
        const place = e.target.value
        const dbRef = database.ref('workdays/' + place + '/2020');
        dbRef.on('value', snapshot => {
            setMonth(snapshot.val())
            setPath('workdays/' + place + '/2020/')
        })
    }

    function useGetDay(e) {
        const months = e.target.value
        const dbRef = database.ref(path + months);
        dbRef.on('value', snapshot => {
            setDays(snapshot.val())
            setPath(path + months + '/')
        })
    }

    function useGetHours(e) {
        const day = e.target.value
        console.log(day);
        const dbRef = database.ref(path + day);
        dbRef.on('value', snapshot => {
            setHours(snapshot.val())
            setPath(path + 'hours')
        })
    }

    function useGetMin(e) {
        const hour = e.target.value
        console.log(hour);
        console.log(path);
        const dbRef = database.ref(path[hour]);
        dbRef.on('value', snapshot => {
            console.log(snapshot.val());
            setMin(snapshot.val())
        })
    }


    useEffect(() => {
        const dbRef = database.ref('workdays');
        dbRef.on('value', snapshot => {
            setworkdays(snapshot.val())
        })
    }, [database])

    return {workdays ,month, days, hours, min, useGetMonth, useGetDay, useGetHours, useGetMin, path}
}


