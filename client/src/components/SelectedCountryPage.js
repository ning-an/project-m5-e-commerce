import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SmallCompany from "./Items/SmallCompany";
import { teal } from "@material-ui/core/colors";

export default function SelectedCountryPage() {
  const companies = useSelector((state) => state.auth.companies);
  const { country } = useParams();

  let findCompanies = companies.filter((companies) => {
    return companies.country == country;
  });

  const countryOrigin = findCompanies[0].country;
  return (
    <>
      <Section style={{ margin: "25px 25px" }}>
        Search by: {countryOrigin}
      </Section>
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
      <Grid style={{ margin: "50px 100px" }}>
        {findCompanies
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
            let order = undefined;
            if (i > 0) order = arr[i - 1].name[0];
            if (order !== company.name[0]) {
              return (
                <>
                  <FixingGrid id={company.name[0]}></FixingGrid>
                  <SmallCompany key={company._id} company={company} />
                </>
              );
            } else return <SmallCompany key={company._id} company={company} />;
          })}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(5, auto);
  gap: 2em;
`;

const Section = styled.div`
  font-size: 25px;
`;
const Alphabar = styled.div`
  display: flex;
  justify-content: center;
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
`;
