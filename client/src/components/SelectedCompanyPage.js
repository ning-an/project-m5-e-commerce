import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SmallCompany from "./Items/SmallCompany";

export default function SelectedCompanyPage() {
  const { companies } = useSelector((state) => state.auth);
  return (
    <>
      <h1>You clicked the company, you should company products</h1>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(8, auto);
  gap: 2em;
`;
