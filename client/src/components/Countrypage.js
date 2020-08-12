import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Countrypage() {
  return (
    <>
      <Wrapper>
        <Grid style={{ margin: "50px 100px" }}>
          <Body to="/countries/United States">United States</Body>
          <Body to="/countries/Japan">Japan</Body>
          <Body to="/countries/Taiwan">Taiwan</Body>
          <Body to="/countries/Canada">Canada</Body>
          <Body to="/countries/Finland">Finland</Body>
          <Body to="/countries/South Korea">South Korea</Body>
          <Body to="/countries/Netherlands">Netherlands</Body>
          <Body to="/countries/France">France</Body>
          <Body to="/countries/China">China</Body>
          <Body to="/countries/Italy">Italy</Body>
          <Body to="/countries/Austria">Austria</Body>
        </Grid>
      </Wrapper>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(4, auto) / repeat(3, auto);
  gap: 2em;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  background-color: lightcoral;
`;

const Body = styled(Link)`
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  justify-content: space-around;
  text-decoration: none;
  color: navy;
`;
