import { useState } from 'react';


// open filters or orders

export const useOpenOrderFilter = () => {
    const [openOrderFilter, setOpenOrderFilter] = useState('order');
    return {openOrderFilter, setOpenOrderFilter}
}