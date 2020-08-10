import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../action";

import { BuyBtn } from "../BuyBtn";
import { COLORS } from "../constants";

export default function SmallItem({ item }) {
  const [hover, setHover] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={item.imageSrc} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <Flag>{item.category}</Flag>
      {hover &&
        (item.numInStock === 0 ? (
          <BuyBtn disabled={true} style={{ opacity: "0.5" }}>
            OUT OF STOCK
          </BuyBtn>
        ) : (
          <BuyBtn onClick={() => dispatch(addItemToCart(item, item.id))}>
            ADD TO CART{" "}
            {state.cart[item.id] ? `Qt: ${state.cart[item.id].quantity}` : ""}
          </BuyBtn>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 16px -11px rgba(0, 0, 0, 0.75);
<<<<<<< Updated upstream
  padding: 20px 10px 5px;
  text-align: center;
  height: 350px;
`;

const Flag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.bg};
  color: ${COLORS.font};
=======
  img {
    height: 20vh;
    width: 15vw;
    padding-top: 15px;
  }
  p {
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
>>>>>>> Stashed changes
`;
