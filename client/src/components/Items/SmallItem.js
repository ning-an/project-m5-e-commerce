import React from "react";
import styled from "styled-components";

export default function SmallItem({ item }) {
  return (
    <Wrapper>
      <img
        src={item.imageSrc}
        alt="A random product from our inventory to buy"
      />
      <p>{item.price}</p>
      <p>Stock: {item.numInStock}</p>
      <p>{item.name}</p>
      <p>{item.category}</p>
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
