export const getItemsQuantityInCart = (cart) => {
    let cartItems = Object.values(cart);
    let sum = 0;
    
    if(cartItems.length === 0){
        return sum;
    } else {
        cartItems.forEach(item => sum += item.quantity);
    }

    return sum;
}

export const getPriceTotalOfItemsInCart = (cart) => {
    let cartItems = Object.values(cart);
    let sum = 0;

    if(cartItems.length === 0){
        return sum;
    } else {
        cartItems.forEach(item => sum += item.quantity * Number(item.price.split("$")[1]));
    }

    return sum.toFixed(2);
}

export const getCompanyName = (id, companiesArr) => {
    let company = companiesArr.find(company => company.id === id);
    return company.name;
}

export const checkIfAllItemsAreInStockLimit = (cart) => {
    return cart.every(item => item.quantity <= item.numInStock);
}