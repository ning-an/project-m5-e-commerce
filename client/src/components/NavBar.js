import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "./constants";

export default function NavBar() {
  return (
    <Wrapper>
      <NavLink to="/categories">Category</NavLink>
      <NavLink to="/company">Company</NavLink>
      <NavLink to="/section">Section</NavLink>
      <NavLink to="/aboutus">About us</NavLink>
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

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;
