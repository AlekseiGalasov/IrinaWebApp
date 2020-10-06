import React from 'react'
import styled from 'styled-components'
import {OverLay, Modal, CloseBtn, Img, Label} from '../Styles/Overlay_Modal'
import { Button } from '../Styles/Button'
import Close from '../../images/close.svg'

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
`;

const H1 = styled.h1`
    font-size: 36px;
    letter-spacing: 2px;
    margin: ${props => props.logon ? '25px 0' : '5px'};

`;



export const AuthModals = ({auth, setAuthModal}) => {
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            return setAuthModal(false);
        }
    }

    if(auth === 'login') {
    return(
        <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
                <CloseBtn  id='CloseBtn' onClick={CloseModal}><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                    <H1>Регистрация</H1>
                    <Label>
                        Емаил
                        <Input  name='email' type='email' placeholder='example@gmail.com'></Input>
                    </Label>
                    <Label>
                        Пароль
                        <Input  name='password' type='password' placeholder='*****'></Input>
                    </Label>
                    <Label>
                        Имя, Фамилия
                        <Input  name='name' type='input' placeholder='Amelia Clark'></Input>
                    </Label>
                    <Label>
                        Телефон
                        <Input name='phone' type='phone' placeholder='12345678'></Input>
                    </Label>
                    <Button authBtn>Подтвердить</Button>
                    
            </Modal>
        </OverLay>
    )
    } else if(auth === 'logon') {
        return(
        <OverLay id='OverLay' onClick={CloseModal}>
            <Modal>
                <CloseBtn  id='CloseBtn' onClick={CloseModal}><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                    <H1 logon>Вход</H1>
                    <Label>
                        Емаил
                        <Input  name='email' type='email' placeholder='example@gmail.com'></Input>
                    </Label>
                    <Label>
                        Пароль
                        <Input  name='password' type='password'></Input>
                    </Label>
                    <Button authBtn>Войти</Button>
            </Modal>
        </OverLay>
        )
    }
}