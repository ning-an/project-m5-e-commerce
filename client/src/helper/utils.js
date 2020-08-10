export const getItemsInCart = (cart) => {
    let cartItems = Object.values(cart);
    
    if(cartItems.length === 0){
        return 0;
    } else {
        return cartItems.length;
    }
}