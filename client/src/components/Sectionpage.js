import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Sectionpage() {
  return <div>This page shows the items selected from Sections</div>;
}

const Grid = styled.div`
  display: grid;
  grid: repeat(6, auto) / repeat(8, auto);
  gap: 2em;
`;
