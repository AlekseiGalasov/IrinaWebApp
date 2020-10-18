import { useState } from 'react';


// Open user menu or menu with goods

export const useOpenUserMenu = () => {
    const [openUserMenu, setOpenUserMenu] = useState('offers');
    return {openUserMenu, setOpenUserMenu}
}