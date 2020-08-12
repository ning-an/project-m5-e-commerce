import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Pagination from "./Pagination";
import { COLORS } from "./constants";

export default function SearchResults() {
  const { result } = useSelector((state) => state.searchResult);
  const { input } = useParams();

  return (
    <>
      <h1>
        Search results by <Search>'{input}'</Search>
      </h1>
      <Pagination items={result} />
    </>
  );
}

const Search = styled.span`
  color: ${COLORS.font};
  font-style: italic;
`;
