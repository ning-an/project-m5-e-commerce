import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { COLORS } from "./constants";
import Dropdown from "./NavBarDropdow";

export default function NavBar() {
  return (
    <Wrapper>
      <button>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </button>
      <Dropdown name="category" />
      <button>
        <NavLink to="/company" activeClassName="selected">
          Company
        </NavLink>
      </button>
      <button>
        <NavLink to="/country" activeClassName="selected">
          Country
        </NavLink>
      </button>
      <Dropdown name="body_location" />
      <button>
        <NavLink to="/aboutus" activeClassName="selected">
          About us
        </NavLink>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: ${COLORS.font};
  background-color: ${COLORS.bg};
  border: 1px navy solid;
  border-radius: 4px;
  padding: 4px 0;
  font-weight: bold;

  .selected {
    background-color: ${COLORS.font};
    color: white;
    padding: 0 10px;
    border-radius: 4px;
  }

  button {
    font-size: 25px;
    background-color: transparent;
    border: none;
    color: ${COLORS.font};
    text-transform: none;
    padding: 0;
  }
`;
