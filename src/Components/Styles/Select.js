import styled from 'styled-components'

export const Select = styled.select`
cursor: pointer;
padding: 10px;
width: 150px;
margin: 3px 0;
box-shadow: rgba(0, 0, 0, 0.25) 3px 4px 5px;
background-color: rgba(255, 255, 255, 0.7);
font-family: 'Oswald', sans-serif;
border: none;
outline: none;
transition: 0.5s;
color: #86786F;
letter-spacing: 1.1px;
&:focus {
    box-shadow: rgba(223,223,223,0.55) 10px 5px 15px;
}
`;