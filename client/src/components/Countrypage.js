import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

export default function Countrypage() {
  return (
    <>
      <Wrapper>
        <Grid style={{ margin: "50px 100px" }}>
          <Body to="/country/United States">United States</Body>
          <Body to="/country/Japan">Japan</Body>
          <Body to="/country/Taiwan">Taiwan</Body>
          <Body to="/country/Canada">Canada</Body>
          <Body to="/country/Finland">Finland</Body>
          <Body to="/country/South Korea">South Korea</Body>
          <Body to="/country/Netherlands">Netherlands</Body>
          <Body to="/country/France">France</Body>
          <Body to="/country/China">China</Body>
          <Body to="/country/Italy">Italy</Body>
          <Body to="/country/Austria">Austria</Body>
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
