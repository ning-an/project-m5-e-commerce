import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import hippo from "../assets/hippo.png";
import { IoIosCart } from "react-icons/io";
import { getItemsQuantityInCart } from "../helper/utils";

export default function Header() {
  const state = useSelector((state) => state);

  return (
    <>
      <Wrapper>
        <TextInputContainer>
          <Slogan>When it comes to wearables,</Slogan>
          <Logo> Pygmy</Logo>
          <Hippo src={hippo} />
        </TextInputContainer>
        <CartWrapper>
          <NavLink exact to="/cart">
            <IoIosCart style={{ marginTop: "30px", fontSize: "2em" }} />
            <span style={{ margin: "30px 100px 0 0", fontSize: "1.2em" }}>
              {getItemsQuantityInCart(state.cart)}
            </span>
          </NavLink>
        </CartWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.h3`
  display: flex;
  justify-content: space-evenly;
`;

const Hippo = styled.img`
  height: 11vh;
  width: 18vh;
  padding: 20px 0 0 20px;
`;

const TextInputContainer = styled.div`
  color: teal;
  margin-left: 200px;
`;

const SearchBar = styled.input`
  height: 2vh;
`;

const Slogan = styled.span`
  color: black;
  font-family: "Handlee", cursive;
  font-size: 20px;
`;

const Login = styled.button`
  height: 40px;
  width: 100px;
  font-family: "Limelight", cursive;
`;
const Logo = styled.span`
  font-family: "Limelight", cursive;
  font-size: 150px;
`;

const RightOfLogo = styled.div`
  display: inline-block;
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
