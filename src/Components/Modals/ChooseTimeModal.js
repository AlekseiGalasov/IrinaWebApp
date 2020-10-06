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


export const ChooseTimeModal = ({setTimeModal}) => {
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            setTimeModal(false);;
        }
    }
    return(
        <OverLay onClick={CloseModal} id='OverLay'>
            <Modal>
                <CloseBtn><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                <H2>Выбор места и время</H2>
                <Label for="place">Место</Label>
                    <Select name="place" id="place">
                        <option value="onePlace">One place</option>
                        <option disabled value="secondPlace">Second place</option>
                        <option value="thirdPlace">Third place</option>
                    </Select>
                <Label for="day">Февраль</Label>
                    <Select name="day" id="day">
                        <option value="onePlace">One place</option>
                        <option disabled value="secondPlace">Second place</option>
                        <option value="thirdPlace">Third place</option>
                    </Select>
                <Label for="hour">Час</Label>
                    <Select name="hour" id="hour">
                        <option value="onePlace">One place</option>
                        <option disabled value="secondPlace">Second place</option>
                        <option value="thirdPlace">Third place</option>
                    </Select>
                <Label for="min">Минуты</Label>
                    <Select name="min" id="min">
                        <option value="5">5</option>
                        <option disabled value="10">10</option>
                        <option value="15">15</option>
                    </Select>
            </Modal>
        </OverLay>
    )
} 