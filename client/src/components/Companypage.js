import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import SmallCompany from "./Items/SmallCompany";

export default function Companypage() {
  const { companies } = useSelector((state) => state.auth);
  return (
    <>
      <div>Shows all companies after clicking "Company"</div>
      <Grid style={{ margin: "50px 100px" }}>
        {companies.map((company) => {
          return <SmallCompany key={company._id} company={company} />;
        })}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(8, auto);
  gap: 2em;
`;
