import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem.js';
import { device } from '../Styles/Devices'
import { MenuStyled } from '../Styles/MenuStyled'
import { Preloader } from './Preloadler'

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

export const Menu = ({openItem, setOpenItem, orders, setOrders, dbMenu}) => {


    return(
    <MenuStyled>
            {dbMenu ?
            <>
            <SectionMenu>
                <h2>Комплекты</h2>
                <ListItem
                    itemList={dbMenu.specials}
                    setOpenItem={setOpenItem}
                    orders={orders}
                    setOrders={setOrders}
                ></ListItem>
            </SectionMenu>
            <SectionMenu>
                <h2>Депиляция для Женщин</h2>
                <ListItem
                    itemList={dbMenu.woman}
                    setOpenItem={setOpenItem}
                    orders={orders}
                    setOrders={setOrders}
                ></ListItem>
            </SectionMenu>
            <SectionMenu>
                <h2>Депиляция для мужчин</h2>
                <ListItem
                    itemList={dbMenu.man}
                    setOpenItem={setOpenItem}
                    orders={orders}
                    setOrders={setOrders}
                ></ListItem>
            </SectionMenu>
            </>
            : Preloader()}
    </MenuStyled>
)};