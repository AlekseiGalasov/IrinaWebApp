import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { OrderListItem } from './OrderListItem.js'
import { Total } from '../Styles/Total'
import { OrderTitle } from '../Styles/OrderTitle'
import { device } from '../Styles/Devices'
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'

const OrderStyled = styled.div`
    position:fixed;
    top: 80px;
    height: calc(100% - 160px);
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


export const Order = ({orders, setOrders , setTimeModal, authentication, setAuthModal}) => {


    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1)
        setOrders(newOrders);
    }

    return(
    <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
        {orders.length ? 
            <OrderList> 
                {orders.map((order, index) => <OrderListItem
                key={index}
                order={order}
                index={index}
                deleteItem={deleteItem}
                 />)}
            </OrderList> :
            <EmptyList>Список заказов пуст!</EmptyList>}
        </OrderContent>
        {orders.length ? 
        <>
        <Total>
            <span>Конечная сумма</span>
            <span>{formatCurrency(totalPriceItems(orders))}</span>
        </Total>
        <Button onClick={() => authentication ? orders.length > 0 ? setTimeModal(true) : alert('Сперва выберите хоть 1 товар') : setAuthModal('logon')}>Оформить</Button>
        </> : null}
    </OrderStyled>
)};