import React from 'react'
import styled from 'styled-components'
import {OverLay, Modal, CloseBtn, Img, Label, H2} from '../Styles/Overlay_Modal'
import { Button } from '../Styles/Button'
import Close from '../../images/close.svg'
import { device } from '../Styles/Devices'
import { useDates } from '../../Hooks/authentification/useDates'


const Input = styled.input`
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
        @media ${device.tablet} {
                width: 130px;
                height: 30px;
                margin: 5px 0;
                font-size: 11px;
            }
        `;

const Span = styled.span`
		font-family: 'Oswald', sans-serif;
`;



export const AuthModals = ({auth, setAuthModal, err, logIn, logOn}) => {
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            return setAuthModal(false);
        }
    }

    const dates = useDates()

    if(auth === 'login') {
    return(
        <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
                <CloseBtn  id='CloseBtn' onClick={CloseModal}><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                    <H2>Регистрация</H2>
                    <Label>
                        Емаил
                        <Input onChange={dates.changeDates} name='email' type='email' placeholder='example@gmail.com'></Input>
                    </Label>
                    <Label>
                        Пароль
                        <Input onChange={dates.changeDates} name='password' type='password' placeholder='*****'></Input>
                    </Label>
                    <Label>
                        Имя, Фамилия
                        <Input onChange={dates.changeDates} name='name' type='input' placeholder='Amelia Clark'></Input>
                    </Label>
                    <Label>
                        Телефон
                        <Input onChange={dates.changeDates} name='phone' type='phone' placeholder='12345678'></Input>
                    </Label>
                    <Button onClick={() => logIn(dates.email, dates.password, dates.name, dates.phone, setAuthModal)}>Submit</Button>
                    {err && <Span>{err}</Span>}
                    
            </Modal>
        </OverLay>
    )
    } else if(auth === 'logon') {
        return(
        <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
                <CloseBtn  id='CloseBtn' onClick={CloseModal}><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                    <H2 logon>Вход</H2>
                    <Label>
                        Емаил
                        <Input onChange={dates.changeDates} name='email' type='email' placeholder='example@gmail.com'></Input>
                    </Label>
                    <Label>
                        Пароль
                        <Input onChange={dates.changeDates} name='password' type='password'></Input>
                    </Label>
                    <Button onClick={() => logOn(dates.email, dates.password, setAuthModal)}>Submit</Button>
                    {err && <Span>{err}</Span>}
            </Modal>
        </OverLay>
        )
    }
}