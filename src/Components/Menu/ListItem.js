import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/Devices'

const List = styled.ul`
    display: flex;
    flex-direction: column;
`

const Item = styled.li`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 20px;
    line-height: 40px;
    position: relative;
    font-size: 20px;

    @media ${device.laptopL} {
        width: 250px;
        height: 120px;
        & > p {
            font-size: 20px;
        }
    }
    @media ${device.laptop} {
        width: 240px;
        height: 100px;
        margin: 30px 10px;
        font-size: auto;
        & > p {
            font-size: 18px;
        }
    }
    @media ${device.tablet} {
        width:270px;
        height: 130px;
        padding: 30px;
        & > p {
            font-size: 16px;
        }
    }
    @media ${device.mobileL} {
        width:100%;
        height: 120px;
        & > p {
            font-size: 16px;
        }
    }
`

const Button = styled.div`
            width: 150px;
            height: 40px;
            background-color: rgb(186, 191, 16);
            border: 2px solid rgb(186, 191, 16);
            text-align: center;
            cursor: pointer;
            transition: 0.3s;
        &:hover {
            background-color: rgba(0, 0, 0, 0);
            border: 2px solid rgb(186, 191, 16);
            color: rgb(186, 191, 16);
        }
        @media ${device.laptop} {
            bottom: -30px;
            height: 30px;
            line-height: 30px;
  }
        @media ${device.tablet} {
            bottom: -30px;
            height: 30px;
            line-height: 30px;
  }
            
`

export const ListItem = ({itemList}) => {

return(
    <List>
        {itemList.map(item => (
            <Item key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                {item.choices ? <Button>Выбрать</Button> : <Button onClick={() => alert('гыгыгы')}>Записаться</Button>}
            </Item>
        ))}
    </List>
)
}