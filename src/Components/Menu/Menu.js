import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem.js';
import { device } from '../Styles/Devices'
import dbmenu from '../dbMenu'

const MenuStyled = styled.main`
    padding-top: 80px;
    margin-left: 380px;
    height: 100%;
    overflow-y: scroll;
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

const SectionMenu = styled.section`
    padding: 30px;
    @media ${device.laptopL} {
        padding: 15px;
    }
    @media ${device.laptop} {
        padding: 10px;
    }
    @media ${device.tablet} {
        padding: 10px;
    }
`

export const Menu = () => {
    return(
    <MenuStyled>
            <SectionMenu>
                <h2>Комплекты</h2>
                <ListItem
                    itemList={dbmenu.specials}
                ></ListItem>
            </SectionMenu>
            <SectionMenu>
                <h2>Депиляция для Женщин</h2>
                <ListItem
                    itemList={dbmenu.woman}
                ></ListItem>
            </SectionMenu>
            <SectionMenu>
                <h2>Депиляция для мужчин</h2>
                <ListItem
                    itemList={dbmenu.man}
                ></ListItem>
            </SectionMenu>
    </MenuStyled>
)};