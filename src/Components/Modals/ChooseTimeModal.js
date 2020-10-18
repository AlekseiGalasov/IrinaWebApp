import React from 'react'
import styled from 'styled-components'
import {OverLay, Modal, CloseBtn, H2, Img, Label } from '../Styles/Overlay_Modal'
import Close from '../../images/close.svg'

const Select = styled.select`
padding: 10px;
width: 150px;
margin: 3px 0;
box-shadow: rgba(0, 0, 0, 0.25) 3px 4px 5px;
background-color: rgba(255, 255, 255, 0.7);
font-family: 'Oswald', sans-serif;
border: none;
outline: none;
transition: 0.5s;
color: #86786F;
letter-spacing: 1.1px;
&:focus {
    box-shadow: rgba(223,223,223,0.55) 10px 5px 15px;
}
`;


export const ChooseTimeModal = ({setTimeModal, workdays, useGetMonth, month, useGetDay, days, useGetHours, hours, path, min, useGetMin}) => {
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            setTimeModal(false);;
        }
    }
    console.log('path', path);

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
                    {hours ? Object.keys(hours.hours).map((item, index) => (
                            <option key={index} value={index}>{item}</option>
                    )) : <option>Choose day</option>}
                    </Select>
                <Label htmlFor="min">Минуты</Label>
                    <Select name="min" id="min">
                    { console.log(min)}
                    </Select>
            </Modal>
        </OverLay>
    )
} 