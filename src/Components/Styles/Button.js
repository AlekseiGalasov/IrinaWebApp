import styled from 'styled-components'
import {device} from './Devices'

export const Button = styled.button`
    min-width: 150px;
    height: 40px;
    font-size: 24px;
    color: rgb(134, 120, 111);
    margin: ${props => props.authBtn ? '15px 0' : '0 22.5px'};
    position: ${props => props.authBtn ? 'absolute' : ''};
    bottom: 10px;
    @media ${device.laptop} {
            min-width: 130px;
            height: 30px;
            font-size: 19px;
            margin: ${props => props.authBtn ? '0' : '4px 15px'};
            bottom: 15px;

    }
    @media ${device.tablet} {
            font-size: 16px;
    }
`;
