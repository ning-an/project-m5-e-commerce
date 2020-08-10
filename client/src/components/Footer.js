import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Copyright>Copyright all rights reserved</Copyright>
    </Wrapper>
  );
}

const Wrapper = styled.h3`
  display: flex;
  align-self: auto;
  justify-content: center;
`;

const Copyright = styled.div`
  color: black;
  font-family: "Handlee", cursive;
  font-size: 24px;
`;
