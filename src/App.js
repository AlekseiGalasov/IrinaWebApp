import React from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
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
import { UserMenu } from './Components/Menu/UserMenu'

/** HOOKS */

import { useOpenItem } from './Hooks/useOpenItem';
import { useChoices } from './Hooks/Choice/useChoice'
import { useOrders } from './Hooks/Order/useOrders.js'
import { useAuthModal } from './Hooks/authentification/useAuthModal'
import { useOpenTimeModal } from './Hooks/chooseTime/useOpenTimeModal'
import { useOpenOrderFilter } from './Hooks/useOpenOrderFilter'
import { useLogIn } from './Hooks/authentification/useLogIn'
import { useOpenUserMenu } from './Hooks/UserMenu/useOpenUserMenu'
import { useClients } from './Hooks/GetDatasFromDB/useClients.js';
import { UseOpenDate } from './Hooks/useOpenDate'
import { useDateAndTime } from './Hooks/useDateAndTime'
import { useDB } from './Hooks/GetDatasFromDB/useDB'
import { useGetWorkDaysDB } from './Hooks/GetDatasFromDB/useGetWorkDaysDB'
import { useConfirmWorkDay } from './Hooks/UserMenu/useConfirmWorkDay'


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
    const logIn = useLogIn(firebase.auth, firebase.database)
    const clients = useClients(database)
    const userMenu = useOpenUserMenu()
    const getDate = UseOpenDate()
    const dates = useDateAndTime()
    const getWorkDayDB = useGetWorkDaysDB(database)
    const ConfirmWorkDay = useConfirmWorkDay()

return (
    <React.Fragment>
        <GlobalStyle />
        <Header {...auth} {...openOrderFilter} {...logIn} {...userMenu} {...getDate}></Header>
        {openOrderFilter.openOrderFilter === 'order' ? <Order {...orders} {...openTimeModal} {...logIn} {...auth}></Order> : <Filter></Filter>}
        {userMenu.openUserMenu === 'offers' ? <Menu {...openItem} {...orders} dbMenu={dbMenu}></Menu> :
        <UserMenu {...logIn} clients={clients} {...getDate} {...dates} {...ConfirmWorkDay}></UserMenu>}
        {openItem.openItem && <ChoiseModal {...openItem} {...choices} {...orders}></ChoiseModal>}
        {auth.auth && <AuthModals {...auth} err={logIn.err} logIn={logIn.LogIn} logOn={logIn.LogOn}/>}
        {openTimeModal.timeModal && <ChooseTimeModal {...logIn} clients={clients} {...openTimeModal} {...getWorkDayDB} {...orders} database={database}/>}
        <Footer></Footer>
    </React.Fragment>
)
}

export default App;
