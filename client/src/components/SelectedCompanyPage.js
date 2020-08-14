import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import SmallItem from "./Items/SmallItem";

export default function SelectedCompanyPage() {
  const { companies, items } = useSelector((state) => state.auth);
  const { companyId } = useParams();

  let findCompany = items.filter((company) => {
    return company.companyId == companyId;
  });

  let companyName = companies.filter((company) => {
    if (company.id == companyId) {
      return company.name;
    }
  });

  return (
    <>
      {!findCompany.length ? (
        <Redirect to="/error/404"></Redirect>
      ) : (
        <>
          <Company style={{ margin: "50px 50px" }}>
            Welcome to {companyName[0].name} Products
          </Company>
          <Grid style={{ margin: "50px 50px" }}>
            {findCompany.map((item) => {
              return <SmallItem key={item.id} item={item} />;
            })}
          </Grid>
        </>
      )}
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
  font-size: 30px;
  font-family: "Cardo", serif;
  color: midnightblue;
`;
