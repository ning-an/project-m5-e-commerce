import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SmallCompany from "./Items/LargeCompany";

export default function SelectedCompanyPage() {
  const { companies, items } = useSelector((state) => state.auth);
  const { companyId } = useParams();
  console.log(companyId);

  let findCompany = items.filter((company) => {
    return company.companyId === Number(companyId);
  });

  let companyName = companies.filter((company) => {
    return company.id === Number(companyId);
  });
  const name = companyName[0].name;

  return (
    <>
      <Company style={{ margin: "50px 50px" }}>
        Welcome to {name} Products
      </Company>
      <Grid style={{ margin: "50px 50px" }}>
        {findCompany.map((company) => {
          return <SmallCompany key={company.id} company={company} />;
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

const Company = styled.h1`
  margin: 100px;
`;
