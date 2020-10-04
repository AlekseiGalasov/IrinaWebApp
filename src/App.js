import React from 'react';
import { GlobalStyle } from './Components/Styles/GlobalStyle.js';
import { Header } from './Components/Header/Header'
import { Order } from './Components/Order/Order'
import { Menu } from './Components/Menu/Menu'
function App() {

return (
    <React.Fragment>
        <GlobalStyle />
        <Header></Header>
        <Order></Order>
        <Menu></Menu>
    </React.Fragment>
)
}

export default App;
