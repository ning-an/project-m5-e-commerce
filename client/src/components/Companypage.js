import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import SmallCompany from "./Items/SmallCompany";

export default function Companypage() {
  const { companies } = useSelector((state) => state.auth);
  return (
    <>
      <Alphabar>
        <Listletter>
          <Nav href="#A">A</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#B">B</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#C">C</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#D">D</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#E">E</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#F">F</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#G">G</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#H">H</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#I">I</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#J">J</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#K">K</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#L">L</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#M">M</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#N">N</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#O">O</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#P">P</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#Q">Q</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#R">R</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#S">S</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#T">T</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#U">U</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#V">V</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#W">W</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#X">X</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#Y">Y</Nav>
        </Listletter>
        <Listletter>
          <Nav href="#Z">Z</Nav>
        </Listletter>
      </Alphabar>

      <Grid style={{ margin: "25px 25px" }}>
        {companies
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map((company, i, arr) => {
            // console.log(company.id)
            let order = undefined;
            if (i > 0) order = arr[i - 1].name[0];
            if (order !== company.name[0]) {
              return (
                <Companies key={company.id}>
                  <FixingGrid id={company.name[0]}></FixingGrid>
                  <SmallCompany company={company} />
                </Companies>
              );
            } else return <SmallCompany key={company.id} company={company} />;
          })}
      </Grid>
    </>
  );
}

const Alphabar = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(11, auto);
  gap: 2em;
`;

const FixingGrid = styled.div`
  grid-column-start: 1;
`;

const Nav = styled.a`
  font-size: 25px;
  display: block;
  float: left;
  text-align: center;
`;

const Listletter = styled.p`
  text-align: center;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.25);
  }
`;

const Companies = styled.div`
  display: contents;
`;
