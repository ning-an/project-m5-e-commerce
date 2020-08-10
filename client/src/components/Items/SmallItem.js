import React, { useState } from "react";
import styled from "styled-components";

import { BuyBtn } from "../BuyBtn";
import { COLORS } from "../constants";

export default function SmallItem({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={item.imageSrc} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <Flag>{item.category}</Flag>
      {hover && (
        <BuyBtn>{item.numInStock > 0 ? "BUY NOW" : "OUT OF STOCK"}</BuyBtn>
      )}
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
`;

const Flag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.bg};
  color: ${COLORS.font};
`;
