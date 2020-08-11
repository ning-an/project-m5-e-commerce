import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sectionpage() {
  return (
    <>
      <Wrapper>
        <Grid>
          <Body to="/section/Arms">Arms</Body>
          <Body to="/section/Chest">Chest</Body>
          <Body to="/section/Feet">Feet</Body>
          <Body to="/section/Hands">Hands</Body>
          <Body to="/section/Head">Head</Body>
          <Body to="/section/Neck">Neck</Body>
          <Body to="/section/Torso">Torso</Body>
          <Body to="/section/Waist">Waist</Body>
          <Body to="/section/Wrist">Wrist</Body>
        </Grid>
      </Wrapper>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(3, auto) / repeat(3, auto);
  gap: 5em;
  /* border: 2px solid black; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;
`;

const Body = styled(Link)`
  height: 100px;
  width: 200px;
  align-items: center;
  font-size: 46px;
  justify-content: space-around;
  text-decoration: none;
  color: navy;
`;
