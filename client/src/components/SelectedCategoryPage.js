import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SmallItem from "./Items/SmallItem";

export default function SelectedCategoryPage() {
  const { items } = useSelector((state) => state.auth);
  const { category } = useParams();

  let findCategory = items.filter((cat) => {
    return cat.category == category;
  });

  const targetCategory = findCategory[0].category;

  return (
    <>
      <Section style={{ margin: "50px 50px" }}>
        Browsing by: {targetCategory}
      </Section>
      <Grid style={{ margin: "50px 50px" }}>
        {findCategory.map((item) => {
          return <SmallItem key={item.id} item={item} />;
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

const Section = styled.h1`
  font-size: 30px;
  font-family: "Cardo", serif;
  color: midnightblue;
`;
