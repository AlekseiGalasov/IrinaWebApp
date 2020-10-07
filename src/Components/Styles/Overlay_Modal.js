import styled from 'styled-components';
import { device } from '../Styles/Devices'


export const OverLay = styled.div`
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0 ,0 ,0 , .5);
    z-index: 130;
`

export const Modal = styled.div`
    width: 350px;
    height: 470px;
    background-color: rgb(186,191,16);
    color: #86786F;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        width: 60%;
        height: 420px;
    }
    
`


export const CloseBtn = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    top: 20px;
    cursor: pointer;
    border: 1px solid rgb(186,191,16);
    transition: ease 0.5s;
    color: white;
    :hover {
        background-color: rgb(186,191,16);
        border: 1px solid white;
    }
    @media ${device.mobileL} {
        right: 5px;
        top: 5px;
        width: 25px;
        height: 25px;
    }
`

export const H2 = styled.h2`
    font-size: 30px;
    margin-top: 15px;
    @media ${device.tablet} {
        font-size: 25px;
        margin-top: 10px;
    }
    @media ${device.mobileL} {
        font-size: 22px;
        margin-top: 10px;
    }
`;


export const Img = styled.img`
    width: 40px;
    @media ${device.mobileL} {
        width: 25px;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    @media ${device.tablet} {
        font-size: 21px;
    }
    @media ${device.mobileL} {
        font-size: 18px;
    }
`;