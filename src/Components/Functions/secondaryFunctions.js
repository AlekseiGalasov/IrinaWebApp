
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

export const MonthName = (fulldate) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[fulldate.getMonth()]
  }


export const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }


