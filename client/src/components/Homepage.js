import React from "react";
import SmallItem from "./Items/SmallItem";
import styled from "styled-components";

const get15RandomItems = (items) => {
  let randomItems = [];

  for (let i = 0; i < 15; i++) {
    let randomNumInItems = Math.floor(Math.random() * items.length);
    randomItems.push(items[randomNumInItems]);
  }

  return randomItems;
};

export default function Homepage() {
  const [fifteenItems, setFifteenItems] = React.useState(null);

  React.useEffect(() => {
    fetch("/itemsAndCompanies")
      .then((res) => res.json())
      .then((data) => {
        setFifteenItems(get15RandomItems(data.items));
      })
      .catch((err) => console.log("Err: ", err));
  }, []);

  return (
    <>
      <div>The Homepage</div>
      <Grid style={{ margin: "50px 100px" }}>
        {fifteenItems
          ? fifteenItems.map((item) => <SmallItem key={item.id} item={item} />)
          : null}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid: repeat(3, auto) / repeat(5, auto);
  gap: 2em;
`;
