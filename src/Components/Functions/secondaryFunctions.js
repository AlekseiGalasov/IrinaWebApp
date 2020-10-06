
export const formatCurrency = (value) => {
    return value.toLocaleString('ru-RU', {style: 'currency', currency:'EUR'})
};


export const totalPriceItems = (order) => {

    const prices = order.map(item => (item.price))
    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    if(order) {
        return prices.reduce(reducer)
    }
}