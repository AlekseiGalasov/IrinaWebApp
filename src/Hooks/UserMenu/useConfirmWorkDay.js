import { useState } from 'react';


// Open user menu or menu with goods

export const useConfirmWorkDay = () => {
    const [ConfirmWorkDay, setConfirmWorkDay] = useState();
    return {ConfirmWorkDay, setConfirmWorkDay}
}