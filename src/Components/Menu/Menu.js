import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem.js';
import { device } from '../Styles/Devices'
import dbmenu from '../dbMenu'
import { MenuStyled } from '../Styles/MenuStyled'


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

export const Menu = ({openItem, setOpenItem, orders, setOrders}) => {

    

    return(
    <MenuStyled>
            <SectionMenu>
                <h2>Комплекты</h2>
                <ListItem
                    itemList={dbmenu.specials}
                    setOpenItem={setOpenItem}
                    orders={orders}
                    setOrders={setOrders}
                ></ListItem>
            </SectionMenu>
            <SectionMenu>
                <h2>Депиляция для Женщин</h2>
                <ListItem
                    itemList={dbmenu.woman}
                    setOpenItem={setOpenItem}
                    orders={orders}
                    setOrders={setOrders}
                ></ListItem>
            </SectionMenu>
            <SectionMenu>
                <h2>Депиляция для мужчин</h2>
                <ListItem
                    itemList={dbmenu.man}
                    setOpenItem={setOpenItem}
                    orders={orders}
                    setOrders={setOrders}
                ></ListItem>
            </SectionMenu>
    </MenuStyled>
)};