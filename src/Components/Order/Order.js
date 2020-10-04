import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { OrderListItem } from './OrderListItem.js'
import { Total } from '../Styles/Total'
import { OrderTitle } from '../Styles/OrderTitle'
import { device } from '../Styles/Devices'

const OrderStyled = styled.div`
    position:fixed;
    top: 80px;
    height: calc(100% - 80px);
    left: 0;
    padding:20px;
    width: 380px;
    max-width: 380px;
    box-shadow: 3px 4px 5px rgba(186, 191, 16, 0.25);
    display: flex;
    flex-direction: column;

    @media ${device.laptopL} {
        max-width: 350px;
    }
    @media ${device.laptop} {
        max-width: 280px;
        padding: 10px;
    }
    @media ${device.tablet} {
        width: 100%;
        height: 200px;
        background-color: white;
        min-width: 100%;
        z-index: 100;
        padding: 5px;

    }
`;

const OrderContent = styled.div`
    flex-grow: 1;
    padding: 10px;
    overflow-y: scroll;
    @media ${device.tablet} {
        padding: 5px 0px;
    }
`;

const OrderList = styled.ul`

`;

const EmptyList = styled.p`
    text-align:center;
    @media ${device.laptop} {
            font-size: 14px;
    }
    @media ${device.tablet} {
            font-size: 12px;
    }
`;


export const Order = () => {

    return(
    <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
            <OrderList> 
                <OrderListItem/>
            </OrderList>
            <EmptyList>Список заказов пуст!</EmptyList>
        </OrderContent>
        
        <Total>
            <span>Конечная сумма</span>
            <span>25квро</span>
        </Total>
        <Button>Оформить</Button>
    </OrderStyled>
)};