
import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../images/trash.svg'
import { device } from '../Styles/Devices'
import { formatCurrency } from '../Functions/secondaryFunctions'

const OrderItemStyled = styled.li`
    display: flex;
    margin: 5px 0;
    font-size: 16px;
    @media ${device.laptop} {
        font-size: 14px;
        line-height: 25px;
    }
    @media ${device.tablet} {
        font-size: 12px;
        line-height: 24px;
    }
`;

const TrashButton = styled.button`
    width: 24px;
    height:24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    display: flex;
    align-self: center;
`;

const ItemName = styled.span`
    flex-grow: 1;

`;

const ItemPrice = styled.span`
    margin: 0 20px;
    display: flex;
    align-self: center;
`;

const ToppingsWrap = styled.div`
    display: flex;
    column-count: 2;
    flex-wrap: wrap;
    max-width: 320px;
`;

const ToppingItem = styled.div`
    padding: 5px;
    font-size: 12px;
    color: #9A9A9A;

    @media ${device.laptop} {
        font-size: 11px;
        padding: 3px;
    }
    @media ${device.tablet} {
        font-size: 9px;
        padding: 1px;
    }
`;


export const OrderListItem = ({order, index, deleteItem, setOpenItem}) => {

    const refDeleteButton = useRef(null);
    return(
        <>
        <OrderItemStyled>
            <ItemName>{order.name} </ItemName>
            <ItemPrice>{formatCurrency(order.price)}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}></TrashButton>
        </OrderItemStyled>
        <ToppingsWrap>
            {order.choice && <ToppingItem>Выбор: {order.choice}</ToppingItem>}
        </ToppingsWrap>
        </>
    )

}