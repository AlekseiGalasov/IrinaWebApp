import styled from 'styled-components'
import { device } from '../Styles/Devices'


export const OrderTitle = styled.h2`
    text-align: center;
    font-size: 36px;
    @media ${device.laptop} {
            font-size: 18px;
    }
    @media ${device.tablet} {
            font-size: 16px;
    }
`;