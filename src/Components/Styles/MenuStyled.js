import styled from 'styled-components';
import { device } from '../Styles/Devices'

export const MenuStyled = styled.main`
    margin-top: 80px;
    margin-left: 380px;
    height: calc(100% - 160px);
    @media ${device.laptopL} {
        margin-left: 350px;
    }
    @media ${device.laptop} {
        margin-left: 280px;
    }
    @media ${device.tablet} {
        margin-left: 0;
        margin-top: 280px;
    }
`;