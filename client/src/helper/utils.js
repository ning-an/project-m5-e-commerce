export const getItemsInCart = (cart) => {
    let cartItems = Object.values(cart);
    let sum = 0;
    
    if(cartItems.length === 0){
        return sum;
    } else {
        cartItems.forEach(item => sum += item.quantity);
    }

    return sum;
}

export const getCompanyName = (id, companiesArr) => {
    let company = companiesArr.find(company => company.id === id);
    return company.name;
}