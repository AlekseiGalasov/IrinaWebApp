import React from 'react';
import firebase from 'firebase/app'
import 'firebase/database';
import { GlobalStyle } from './Components/Styles/GlobalStyle.js';
import { Header } from './Components/Header/Header'
import { Order } from './Components/Order/Order'
import { Menu } from './Components/Menu/Menu'
import { ChoiseModal } from './Components/Modals/ChoiseModal'
import { AuthModals } from './Components/Modals/AuthModals'
import { Footer } from './Components/Footer/Footer'
import { ChooseTimeModal } from './Components/Modals/ChooseTimeModal'
import { Filter } from './Components/Filter/Filter'
import { useDB } from './Components/Hooks/useDB'
/** HOOKS */

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useChoices } from './Components/Hooks/useChoice'
import { useOrders } from './Components/Hooks/useOrders.js'
import { useAuthModal } from './Components/Hooks/authentification/useAuthModal'
import { useOpenTimeModal } from './Components/Hooks/chooseTime/useOpenTimeModal'
import { useOpenOrderFilter } from './Components/Hooks/useOpenOrderFilter'


const firebaseConfig = {
    apiKey: "AIzaSyBhuocMuUloXZnBixGfR1V1yxLt4QQLRjc",
    authDomain: "irinawebapp.firebaseapp.com",
    databaseURL: "https://irinawebapp.firebaseio.com",
    projectId: "irinawebapp",
    storageBucket: "irinawebapp.appspot.com",
    messagingSenderId: "303972611653",
    appId: "1:303972611653:web:81125605802fa627ef552c",
    measurementId: "G-D1T7R9K2CR"
  };

firebase.initializeApp(firebaseConfig)

function App() {

    const openItem = useOpenItem();
    const choices = useChoices();
    const orders = useOrders();
    const auth = useAuthModal();
    const openTimeModal = useOpenTimeModal();
    const openOrderFilter = useOpenOrderFilter();
    const database = firebase.database();
    const dbMenu = useDB(database)

return (
    <React.Fragment>
        <GlobalStyle />
        <Header {...auth} {...openOrderFilter}></Header>
        {openOrderFilter.openOrderFilter === 'order' ? <Order {...orders} {...openTimeModal}></Order> : <Filter></Filter>}
        <Menu {...openItem} {...orders} dbMenu={dbMenu}></Menu>
        {openItem.openItem && <ChoiseModal {...openItem} {...choices} {...orders}></ChoiseModal>}
        {auth.auth && <AuthModals {...auth}/>}
        {openTimeModal.timeModal && <ChooseTimeModal {...openTimeModal}/>}
        <Footer></Footer>
    </React.Fragment>
)
}

export default App;
