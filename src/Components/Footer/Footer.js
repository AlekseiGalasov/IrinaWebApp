import React from 'react'
import styled from 'styled-components'
import gmail from '../../images/gmail.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg'

const FooterWrap = styled.header`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgb(186, 191, 16);
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 22.5px;
    cursor: pointer;
`;


const ImgContainer  = styled.div`
`;


export const Footer = ({auth, setAuthModal}) => {

    return (
    <FooterWrap>
        <ImgContainer>
            <Img alt='basket' src={facebook}></Img>
            <Img alt='basket' src={instagram}></Img>
            <Img alt='basket' src={gmail}></Img>
        </ImgContainer>
    </FooterWrap>
    )
}