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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px -11px rgba(0, 0, 0, 0.75);
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
