import React from "react";
import styled from "styled-components";

export default function SmallCompany({ company }) {
  return (
    <Wrapper>
      <p>{company.name}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px -11px rgba(0, 0, 0, 0.75);
  border: 2px solid black;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  p {
    text-align: center;
    opacity: 100%;
  }
`;
