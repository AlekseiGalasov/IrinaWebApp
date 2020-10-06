import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import basket from '../../images/basket.svg';
import filter from '../../images/filter.svg';


const HeaderWrap = styled.header`
    position: fixed;
    width: 100%;
    background-color: rgb(186, 191, 16);
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    z-index: 10;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 22.5px;
    cursor: pointer;
`;


const ImgContainer  = styled.div`
    width: 44%;
    margin-left: 6%;
`;

const BtnContainer  = styled.div`
    width: 50%;
    text-align: end;
    margin-right: 25px;
`;

export const Header = ({auth, setAuthModal, setOpenOrderFilter}) => {

    return (
    <HeaderWrap>
        <ImgContainer>
            <Img onClick={() => setOpenOrderFilter('order')} alt='basket' src={basket}></Img>
            <Img onClick={() => setOpenOrderFilter('filter')} alt='basket' src={filter}></Img>
        </ImgContainer>
        <BtnContainer>
            <Button onClick={() => setAuthModal('login')}>Регистрация</Button>
            <Button onClick={() => setAuthModal('logon')}>Войти</Button>
        </BtnContainer>
    </HeaderWrap>
    )
}