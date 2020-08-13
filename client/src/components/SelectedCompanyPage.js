import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import SmallCompany from "./Items/LargeCompany";

export default function SelectedCompanyPage() {
  const { companies, items } = useSelector((state) => state.auth);
  const { companyId } = useParams();
  console.log(companyId);

  let findCompany = items.filter((company) => {
    return company.companyId == companyId;
  });

  let companyName = companies.filter((company) => {
    if (company.id == companyId) {
      return company.name;
    }
  });
  const name = companyName[0].name;

  return (
    <>
      {!findCompany.length ? (
        <Redirect to="/error/404"></Redirect>
      ) : (
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
      )}
    </>
  );
}

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(5, auto);
  gap: 2em;
`;

const Company = styled.h1`
  margin: 100px;
`;
