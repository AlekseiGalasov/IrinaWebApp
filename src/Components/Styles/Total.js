import styled from 'styled-components'
import { device } from '../Styles/Devices'

export const Total = styled.div`
display: flex;
padding: 30px;
& span:first-child {
    flex-grow: 1;
}
& span:nth-child(2) {
    margin-right: 25px;
}
    @media ${device.laptopL} {
            font-size: 16px;
    }
    @media ${device.laptop} {
            font-size: 14px;
    }
    @media ${device.tablet} {
            padding: 5px;
            font-size: 10px;
    }
`;