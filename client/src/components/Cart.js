import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CheckoutDialog from "./CheckoutDialog";

import { BuyBtn } from "./BuyBtn";
import CartItem from "./Items/CartItem";
import { getItemsQuantityInCart, getPriceTotalOfItemsInCart, checkIfAllItemsAreInStockLimit } from "../helper/utils";
import { handlePurchasePayload } from "./handlers";

export default function Cart() {
  const cart = useSelector(state => Object.values(state.cart));
  const [open, setOpen] = React.useState(false);
  const [purchasePayload, setPurchasePayload] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return(
    <>
      <Wrapper>
        <Header>
          <h2>Shopping Cart</h2>
        </Header>
        
        <div style={{display: "flex"}}>
          <div style={{width: "75%"}}>
            {
              cart.length ?
              cart.map(item => <CartItem key={item.id} item={item}/>) :
              <h3 style={{margin: "20px"}}>Your shopping cart is empty</h3>
            }
          </div>

          <CheckOutSection>
            <CheckOutWrapper>
              <Items>{`( ${getItemsQuantityInCart(cart)} items ) `}</Items> <PriceTotal>sub total ${getPriceTotalOfItemsInCart(cart)}</PriceTotal>
            </CheckOutWrapper>
            {
              cart.length && checkIfAllItemsAreInStockLimit(cart) ? <BuyBtn onClick={() => {
                handleClickOpen(); 
                setPurchasePayload(handlePurchasePayload(cart));
              }} style={{fontSize: "1.1em"}}>Proceed to checkout</BuyBtn> 
              :
              <BuyBtn style={{opacity: "0.5", fontSize: "1.1em"}} disabled>{checkIfAllItemsAreInStockLimit(cart) ? "Please add items to cart" : "One or more items are over the stock limit"}</BuyBtn>
            }
          </CheckOutSection>
        </div>
      </Wrapper>
      <CheckoutDialog handleClose={handleClose} open={open} cart={cart} purchasePayload={purchasePayload}/>
    </>
  );
}

const Header = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    margin: 20px 0;

    h2 {
      margin-left: 20px;
    }
`;

const Wrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
`;

const CheckOutSection = styled.div`
    flex: 1;
    margin-left: 15px;
`;

const Items = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const PriceTotal = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const CheckOutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 25px;
`;

