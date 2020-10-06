import styled from 'styled-components'


export const Button = styled.button`
    min-width: 150px;
    height: 40px;
    font-size: 24px;
    color: rgb(134, 120, 111);
    margin: ${props => props.authBtn ? '15px 0' : '0 22.5px'};
    position: ${props => props.authBtn ? 'absolute' : ''};
    bottom: 10px;
`;
