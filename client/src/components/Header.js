import React from "react";
import styled from "styled-components";
import { useSelector} from "react-redux";
import { NavLink } from "react-router-dom";

import hippo from "../assets/hippo.png";
import { IoIosCart } from "react-icons/io";
import { getItemsInCart } from "../helper/utils";

export default function Header() {
  const state = useSelector(state => state);
  
  return (
    <>
      <CartWrapper>
        <NavLink exact to="/cart">
          <IoIosCart style={{ marginTop: "30px", fontSize: "2em"}}/> 
          <span style={{ margin: "30px 100px 0 0", fontSize: "1.2em"}}>{getItemsInCart(state.cart)}</span>
        </NavLink>
      </CartWrapper>
      <Wrapper>
        <TextInputContainer>
          <Slogan>When it comes to wearables,</Slogan>
          <Logo> Pygmy</Logo>
        </TextInputContainer>
        <Hippo src={hippo} />
        <RightOfLogo>
          {/* <Login>Login</Login>
          <SearchBar /> */}
        </RightOfLogo>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.h1`
  display: flex;
  margin-left: 5vh;
  margin-top: 1.5vh;
  align-self: auto;
  justify-content: space-around;
`;

const Hippo = styled.img`
  height: 18vh;
  width: 30vh;
  margin: 8vh 25vh 0 0;
`;

const TextInputContainer = styled.div`
  color: teal;
`;

const SearchBar = styled.input`
  height: 4vh;
`;

const Slogan = styled.span`
  color: black;
  font-family: "Handlee", cursive;
  font-size: 24px;
`;

const Login = styled.button`
  height: 40px;
  width: 100px;
  font-family: "Limelight", cursive;
`;
const Logo = styled.span`
  font-family: "Limelight", cursive;
  font-size: 250px;
`;

const RightOfLogo = styled.div`
  display: inline-block;
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;