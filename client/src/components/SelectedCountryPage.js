import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

import LargeCompany from "./Items/LargeCompany";

export default function SelectedCountryPage() {
  const { countries } = useSelector((state) => state.auth);
  const { country } = useParams();

  let findCompanies = countries.filter((companies) => {
    return companies.country == country;
  });

  const countryOrigin = findCompanies[0].country;
  return (
    <>
      <Section style={{ margin: "50px 50px" }}>
        Search by: {countryOrigin}
      </Section>
      <Grid style={{ margin: "50px 50px" }}>
        {countryofcompany.map((company) => {
          return <LargeCompany key={company.name} company={company} />;
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
