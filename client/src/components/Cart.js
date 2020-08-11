import React from "react";
import styled from "styled-components";
import CartItem from "./Items/CartItem";
import { useSelector } from "react-redux";

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
          Test
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
    margin: 20px;
`;

const Wrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
`;

const CheckOutSection = styled.div`
    flex: 1;
`;
