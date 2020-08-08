import React from "react";
import styled from "styled-components";
import hippo from "../assets/hippo.png";

export default function Header() {
  return (
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
  height: 30vh;
  width: 30vh;
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
