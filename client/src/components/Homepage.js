import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { get15RandomItems } from "./handlers";
import SmallItem from "./Items/SmallItem";

export default function Homepage() {
  const { items, companies, status } = useSelector((state) => state.auth);

  return (
    <>
      <div>The Homepage</div>
      <Grid style={{ margin: "50px 100px" }}>
        {get15RandomItems(items).map((item) => {
          return <SmallItem key={item.id} item={item} />;
        })}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em;
`;
