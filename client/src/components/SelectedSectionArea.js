import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Pagination from "./Pagination";

export default function SelectedSectionArea() {
  const { items } = useSelector((state) => state.auth);
  const { sectionarea } = useParams();

  let findBodies = items.filter((body) => {
    return body.body_location == sectionarea;
  });

  const bodypart = findBodies[0].body_location;

  return <Pagination items={findBodies} />;
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(5, auto);
  gap: 2em;
`;

const Section = styled.h1``;
