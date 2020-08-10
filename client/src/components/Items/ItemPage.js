import React from "react";
import styled from "styled-components";

import SmallItem from "./SmallItem";

export const ItemPage = ({ items }) => {
  return (
    <Grid style={{ margin: "50px 100px" }}>
      {items.map((item) => {
        return <SmallItem key={item.id} item={item} />;
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2em;
`;
