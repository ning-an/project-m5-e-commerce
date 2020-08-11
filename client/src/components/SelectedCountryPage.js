import React from "react";
<<<<<<< Updated upstream
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SmallCompany from "./Items/SmallCompany";

export default function SelectedCountryPage() {
  const companies = useSelector((state) => state.auth.companies);
  const { country } = useParams();

  let findCompanies = companies.filter((companies) => {
=======
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

import LargeCompany from "./Items/LargeCompany";

export default function SelectedCountryPage() {
  const { countries } = useSelector((state) => state.auth);
  const { country } = useParams();

  let findCompanies = countries.filter((companies) => {
>>>>>>> Stashed changes
    return companies.country == country;
  });

  const countryOrigin = findCompanies[0].country;
  return (
    <>
      <Section style={{ margin: "50px 50px" }}>
        Search by: {countryOrigin}
      </Section>
      <Grid style={{ margin: "50px 50px" }}>
<<<<<<< Updated upstream
        {findCompanies.map((company) => {
          return <SmallCompany key={company.name} company={company} />;
=======
        {countryofcompany.map((company) => {
          return <LargeCompany key={company.name} company={company} />;
>>>>>>> Stashed changes
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

const Section = styled.div``;
