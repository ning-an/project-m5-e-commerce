<<<<<<< Updated upstream
import React, { useState } from "react";
import styled from "styled-components";

import { BuyBtn } from "../BuyBtn";
import { COLORS } from "../constants";

export default function LargeCompany({ company }) {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={company.imageSrc} alt={company.name} />
      <p>{company.name}</p>
      <p>{company.price}</p>
      <Flag>{company.category}</Flag>
      {hover && (
        <BuyBtn>{company.numInStock > 0 ? "BUY NOW" : "OUT OF STOCK"}</BuyBtn>
      )}
=======
import React from "react";
import styled from "styled-components";

export default function LargeCompany({ company }) {
  return (
    <Wrapper>
      <img
        src={company.imageSrc}
        alt="A random product from our inventory to buy"
      />
      <p>{company.price}</p>
      <p>Stock: {company.numInStock}</p>
      <p>{company.name}</p>
      <p>{company.category}</p>
>>>>>>> Stashed changes
    </Wrapper>
  );
}

const Wrapper = styled.div`
<<<<<<< Updated upstream
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 16px -11px rgba(0, 0, 0, 0.75);
  padding: 20px 10px 5px;
  text-align: center;
  height: 350px;
=======
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px -11px rgba(0, 0, 0, 0.75);
>>>>>>> Stashed changes
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
`;
<<<<<<< Updated upstream

const Flag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.bg};
  color: ${COLORS.font};
`;
=======
>>>>>>> Stashed changes
