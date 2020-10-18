import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/Devices'
import { MenuStyled } from '../Styles/MenuStyled'
import {MonthName, getLastDayOfMonth} from '../Functions/secondaryFunctions'
import firebase from 'firebase/app'
import 'firebase/database';

const SectionMenu = styled.section`
    padding: 30px;
    @media ${device.laptopL} {
        padding: 15px;
    }
    @media ${device.laptop} {
        padding: 10px;
    }
    @media ${device.tablet} {
        padding: 10px;
    }
`

const H4 = styled.h4`
    color: white;
    min-width: 80px;
    text-align: center;
    text-transform: uppercase;
`;

const Next = styled.div`
    height: 50px;
    width: 50px;
    background-image: url("images/next.svg");
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    cursor: pointer;
`;

const Prev = styled.div`
    width: 50px;
    height: 50px;
    background-image: url("images/next.svg");
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    cursor: pointer;
    transform: rotate(180deg);

`;

const SelectMonth = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserMenu = ({authentication, clients, SetOpenDate, OpenDate, date, fromTime, place, toTime, changeDates}) => {


    if(authentication && clients) {
        for (let key in clients) {
            if(clients[key].clientID === authentication.uid && clients[key].clientID === 'L5oVVwZQD8QxpipjN0QrCtcgwld2') {

                const daysArr = []
                    for (let i = 1; i <= getLastDayOfMonth(OpenDate.getFullYear(), OpenDate.getMonth()); i++) {
                    daysArr.push(i);
                }

                const min = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

                const hoursArr = []
                    for(let i = 0; i < 24; i++) {
                        hoursArr.push(i)   
                    }
                
                const month = OpenDate.getFullYear() + '/' + MonthName(OpenDate) + '/' + date


                if(fromTime && toTime) {
                var workHours = []
                for(let i = Number(fromTime); i <= Number(toTime); i++) {
                    workHours.push({hour: i, min : min})
                    }
                }

                // console.log('date', date);
                // console.log('fromtime' , fromTime);
                // console.log('toTime', toTime);
                // console.log('Month', month);
                // console.log('min', min);
                // console.log('workHours', workHours);

                const dataBase = firebase.database();
                const addWorkTime = () => {
                    dataBase.ref('workdays/'+ place + '/' + month).set({
                        hours: workHours,
                    })};

        return(
            <MenuStyled>
                <SectionMenu>
                <SelectMonth>
                    <Prev onClick={() => SetOpenDate(new Date(OpenDate.setMonth(OpenDate.getMonth()-1)))}></Prev>
                        <H4>{MonthName(OpenDate)}</H4>
                    <Next onClick={() => SetOpenDate(new Date(OpenDate.setMonth(OpenDate.getMonth()+1)))}></Next>
                </SelectMonth>
                <select name="day" onChange={changeDates}>
            {daysArr.map((elem, index) => (
                <option
                    key={index}
                    value={elem}>
                    {index + 1}
                </option>
            ))}   
        </select>
        <select name="fromTime" onChange={changeDates}>
            {hoursArr.map((elem, index) => (
                <option
                    key={index}
                    value={elem}>
                    {elem}
                </option>
            ))}   
        </select>
        <select name="toTime" onChange={changeDates}>
            {hoursArr.map((elem, index) => (
                <option
                    key={index}
                    value={elem}>
                    {elem}
                </option>
            ))}   
        </select>
        <select name="place" onChange={changeDates}>
                <option key='1' value={"MahtraTee18"}>Mahtra tee 18</option>
                <option key='2'  value={"MahtraTee45"}>Mahtra tee 45</option> 
        </select>
        <button disabled={!date || !fromTime || !toTime} onClick={ () => addWorkTime()}>Готово!</button>
                </SectionMenu>
            </MenuStyled>
            )
        } else if(clients[key].clientID === authentication.uid) {
            const user = clients[key]
            return (
                <MenuStyled>
                        <SectionMenu>
                        <h2>Здравствуйте, {user.clientName}</h2>
                        <h3>Email</h3>        
                        <span>{user.clientEmail}</span>
                        <h3>Phone</h3>
                        <span>{user.clientphone}</span>
                    </SectionMenu>
                </MenuStyled>
                )
            }
        }
    }
    return(
        <MenuStyled>
            <SectionMenu>
                <h2>Пожалуйста войдите в аккаунт!</h2>
                </SectionMenu>
        </MenuStyled>
    )
}
