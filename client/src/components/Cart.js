import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { BuyBtn } from "./BuyBtn";
import CartItem from "./Items/CartItem";
import { getItemsInCart, getPriceTotalOfItemsInCart } from "../helper/utils";

export default function Cart() {
  const cart = useSelector(state => Object.values(state.cart));
  
  return(
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
            <Items>{`( ${getItemsInCart(cart)} items ) `}</Items> <PriceTotal>${getPriceTotalOfItemsInCart(cart)}</PriceTotal>
          </CheckOutWrapper>
          {
            cart.length ? <BuyBtn>Proceed to checkout</BuyBtn> : <BuyBtn style={{opacity: "0.5"}} disabled>Please add items to cart</BuyBtn>
          }
        </CheckOutSection>
      </div>
    </Wrapper>
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

