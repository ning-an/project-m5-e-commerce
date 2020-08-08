import React from "react";
import styled from "styled-components";
import hippo from "../assets/hippo.png";

export default function Header() {
  return (
    <Wrapper>
      <Hippo src={hippo} />
      <TextInputContainer>
        <Slogan>When it comes to wearables,</Slogan>
        <div>Pygmy</div>
        <SearchBar />
        <div>Login</div>
      </TextInputContainer>
    </Wrapper>
  );
}

const Wrapper = styled.h2`
  display: flex;
  margin-left: 1vh;
`;

const Hippo = styled.img`
  height: 10vh;
  width: 10vh;
`;

const TextInputContainer = styled.div`
  display: flex;
  margin-top: 3.5vh;
  color: teal;
`;

const SearchBar = styled.input`
  height: 3vh;
`;

const Slogan = styled.span`
  color: black;
`;
