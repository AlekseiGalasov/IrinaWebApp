import { useState } from 'react';

// contain datas about current good

export const useOpenItem = () => {
    const [openItem, setOpenItem] = useState(null);
    return {openItem, setOpenItem};
}