import { useState } from 'react';

export const useOpenOrderFilter = () => {
    const [openOrderFilter, setOpenOrderFilter] = useState('order');
    return {openOrderFilter, setOpenOrderFilter}
}