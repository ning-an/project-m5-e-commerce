import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "./constants";

export default function NavBar() {
  return (
    <Wrapper>
      <div>Category</div>
      <div>Company</div>
      <div>Section</div>
      <div>About us</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
  color: ${COLORS.font};
  background-color: ${COLORS.bg};
  border: 1px navy solid;
  border-radius: 4px;
  padding: 4px 0;
  font-family: "Limelight", cursive;
`;
