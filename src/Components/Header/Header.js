import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import basket from '../../images/basket.svg';
import filter from '../../images/filter.svg';
import { device } from '../Styles/Devices'

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
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
    @media ${device.mobileL} {
        width: 25px;
        height: 25px;
  }
`;


const ImgContainer  = styled.div`
    width: 44%;
    margin-left: 6%;
    display: flex;
    @media ${device.mobileL} {
        font-size: 16px;
    }
`;

const ImgBlock = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;


const BtnContainer  = styled.div`
    width: 50%;
    text-align: end;
    margin-right: 25px;
`;

export const Header = ({auth, setAuthModal, setOpenOrderFilter, authentication, LogOut, setOpenUserMenu, openUserMenu, SetOpenDate}) => {

    return (
    <HeaderWrap>
        <ImgContainer>
            <ImgBlock>
            <Img onClick={() => setOpenOrderFilter('order')} alt='basket' src={basket}></Img>
            <span>Заказы</span>
            </ImgBlock>
            <ImgBlock>
            <Img onClick={() => setOpenOrderFilter('filter')} alt='basket' src={filter}></Img>
            <span>Фильтры</span>
            </ImgBlock>
        </ImgContainer>
        {authentication ?
        <BtnContainer>
            { openUserMenu === 'offers' 
            ?
            <Button onClick={() => setOpenUserMenu('profile')}>{authentication.displayName}</Button>
            :
            <Button onClick={() => setOpenUserMenu('offers')}>Главная</Button>
            }
            <Button onClick={LogOut}>Выйти</Button>  
        </BtnContainer>
        :
        <BtnContainer>
            <Button onClick={() => setAuthModal('login')}>Регистрация</Button>
            <Button onClick={() => setAuthModal('logon')}>Войти</Button>
        </BtnContainer>
        }
    </HeaderWrap>
    )
}