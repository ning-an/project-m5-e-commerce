import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

const countriesArray = [
  "United States",
  "Japan",
  "Taiwan",
  "Canada",
  "Finland",
  "South Korea",
  "Netherlands",
  "France",
  "China",
  "Italy",
  "Austria",
];

export default function Countrypage() {
  const { companies } = useSelector((state) => state.auth);
  return (
    <>
      <div>Shows all Countries that companies are from</div>
      <Grid style={{ margin: "50px 100px" }}>
        {countriesArray.map((country) => {
          return <Link></Link>;
        })}
      </Grid>
    </>
  );
}
