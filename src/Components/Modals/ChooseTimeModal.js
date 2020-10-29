import React from 'react'
import {OverLay, Modal, CloseBtn, H2, Img, Label } from '../Styles/Overlay_Modal'
import Close from '../../images/close.svg'
import {Button} from '../Styles/Button'
import {Select} from '../Styles/Select'


export const ChooseTimeModal = (
    {   authentication,
        clients, 
        setTimeModal,
        database,
        workdays, 
        workMonth,
        workDay,
        useGetMonth,
        month,
        useGetDay,
        useSetMin,
        workPlace,
        days,
        useGetHours,
        hours,
        orders,
        min,
        selectedHour,
        selectedMin,
        useGetMin
    }) => {
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            setTimeModal(false);;
        }
    }

    const Disabled = (item) => {
        const dbRef = database.ref('Orders/' + workPlace + '/' + workMonth + '/' + workDay)
        dbRef.on('value', snapshot => {
            for (let key in snapshot.val()) {
                let mins = snapshot.val()[key].min
                let hour = snapshot.val()[key].hour
                if (hour == selectedHour) {
                    if(item == mins) {
                        return true 
                    }
                } else {
                    return false
                }

            }
        })
        // hours.map(hour => {
        //     Number(hour)
        //     Number(selectedHour)
        //     if( hour === selectedHour) {
        //         mins.map(min => {
        //             console.log(typeof(min));
        //             console.log(typeof(item));
        //             if(min == item) {
        //                 console.log(true);
        //             }
        //         })
        //     } else {
        //         console.log(false);
        //     }
        // })
    }


    const addToOrder = () => {

        if(authentication && clients) {
            for (let key in clients) {
             if(authentication.uid === clients[key].clientID) {
                const currentUser = clients[key];
                database.ref('Orders/' + workPlace + '/' + workMonth + '/' + workDay).push({
                    hour: selectedHour,
                    min: selectedMin,
                    userId:  currentUser.clientID,
                    userName: currentUser.clientName,
                    userPhone: currentUser.clientphone,
                    userEmail: currentUser.clientEmail,
                    order: orders,
                })
             }
            }
        }
    }


    return(
        <OverLay onClick={CloseModal} id='OverLay'>
            <Modal>
                <CloseBtn><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                <H2>Выбор места и время</H2>
                <Label htmlFor="place">Место</Label>
                    <Select onChange={useGetMonth} name="place" id="place">
                        {Object.keys(workdays).map((place, index) => (
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </Select>
                <Label htmlFor="month">Месяц</Label>
                    <Select onChange={useGetDay} name="month" id="month">
                        {month ? Object.keys(month).map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        )) : <option>Choose place</option>}
                    </Select>
                <Label htmlFor="days">День</Label>
                    <Select onChange={useGetHours} name="days" id="days">
                        {days ? Object.keys(days).map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        )) : <option>Choose month</option>}
                    </Select>
                <Label htmlFor="hour">Час</Label>
                    <Select onChange={useGetMin} name="hour" id="hour">
                    {hours ? hours.hours.map((item,index) => (
                        <option key={index} value={item.hour}>{item.hour}</option>
                        )) : <option>Choose day</option>}
                    
                    </Select>
                <Label htmlFor="min">Минуты</Label>
                    <Select onChange={useSetMin} name="min" id="min">
                    {min ? min.hours.filter(item => item.hour == selectedHour)[0].min.map((item, index ) => (
                        <option disabled={console.log(Disabled(item))} key={index} value={item}>{item}</option>
                        
                    )) : <option>Choose hour</option> }
                    </Select>
                    <Button disabled={!(month && days && hours && min)} onClick={() => {addToOrder()}} >Выбрать</Button>
            </Modal>
        </OverLay>
    )
} 