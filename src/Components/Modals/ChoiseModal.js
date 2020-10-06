import React from 'react'
import styled from 'styled-components'
import {OverLay, Modal, CloseBtn, H2, Img } from '../Styles/Overlay_Modal'
import { Button } from '../Styles/Button'
import Close from '../../images/close.svg'
import { formatCurrency } from '../Functions/secondaryFunctions'

const H3 = styled.h3`
margin: 12px 0;
font-size: 18px;
`;

const FormWrap = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
margin-right: 8px; 
`;

const Span = styled.span`
font-weight: 500;
padding: 8px 0;
`;



export const ChoiseModal = ({setOpenItem, openItem, choice, changeChoise, setOrders, orders}) => {
    const CloseModal = e => {
        if(e.target.id === 'OverLay' || e.target.id === 'CloseBtn') {
            setOpenItem(null);;
        }
    }
    const name = (openItem.choice.filter(item => (item.name === choice))).map(item => (item.name)).toString()
    const price = Number((openItem.choice.filter(item => (item.name === choice))).map(item => (item.price)).toString())
    const time = Number((openItem.choice.filter(item => (item.name === choice))).map(item => (item.time)).toString())

    const order = {
        name: openItem.name,
        choice: name,
        price: price,
        time: time
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
        }
    return(
        <OverLay onClick={CloseModal} id='OverLay'>
            <Modal>
            <CloseBtn><Img onClick={CloseModal} id='CloseBtn' alt='close' src={Close}></Img></CloseBtn>
                <H2>{openItem.name}</H2>
                <H3>Выбор процедуры</H3>
                <FormWrap>
                    {openItem.choice.map((item, i) => (
                    
                        <label key={i}>
                        <Input
                            id={i}
                            name="choices"
                            type='radio'
                            checked={choice === item.name}
                            value={item.name}
                            onChange={changeChoise}
                        ></Input>
                        {item.name}
                        </label>
                    ))}
                </FormWrap>
                <H3>Время процедуры</H3>
                {choice ? <Span>{openItem.choice.map(item => (item.name === choice ? formatCurrency(item.time) : null))}</Span> : <Span>Выберите процедуру</Span> }
                <H3>Цена</H3>
                {choice ? <Span>{openItem.choice.map(item => (item.name === choice ? formatCurrency(item.price) : null))}</Span> : <Span>Выберите процедуру</Span> }
                <Button disabled={!choice} onClick={addToOrder}>Выбрать</Button>
            </Modal>
        </OverLay>
    )
} 