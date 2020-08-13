import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SmallItem from "./Items/SmallItem";

export default function SelectedSectionArea() {
  const { items } = useSelector((state) => state.auth);
  const { sectionarea } = useParams();

  let findBodies = items.filter((body) => {
    return body.body_location === sectionarea;
  });

  const bodypart = findBodies[0].body_location;

  return (
    <>
      <Section style={{ margin: "50px 50px" }}>Browsing by: {bodypart}</Section>
      <Grid style={{ margin: "50px 50px" }}>
        {findBodies.map((item) => {
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
  /* margin: 100px; */
`;
