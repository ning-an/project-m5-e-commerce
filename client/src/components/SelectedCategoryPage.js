import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Pagination from "./Pagination";

export default function SelectedCategoryPage() {
  const { items } = useSelector((state) => state.auth);
  const { category } = useParams();

  let findCategory = items.filter((cat) => {
    return cat.category == category;
  });

  return <Pagination items={findCategory} />;
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(5, auto);
  gap: 2em;
`;

const Section = styled.h1``;
