import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../action";

import { BuyBtn } from "../BuyBtn";
import { COLORS } from "../constants";

export default function LargeCompany({ company }) {
  const [hover, setHover] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={company.imageSrc} alt={company.name} />
      <p>{company.name}</p>
      <p>{company.price}</p>
      <Flag>{company.category}</Flag>
      {hover &&
        (company.numInStock === 0 ? (
          <BuyBtn disabled={true} style={{ opacity: "0.5" }}>
            OUT OF STOCK
          </BuyBtn>
        ) : (
          <BuyBtn onClick={() => dispatch(addItemToCart(company, company.id))}>
            ADD TO CART{" "}
            {state.cart[company.id]
              ? `Qt: ${state.cart[company.id].quantity}`
              : ""}
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
  padding: 20px 10px 5px;
  text-align: center;
  height: 350px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Flag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.bg};
  color: ${COLORS.font};
`;
