import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Menu, MenuItem } from "@material-ui/core";

import { groupItemsByKey } from "./handlers";
import { COLORS } from "./constants";

export default function NavBarDropdow({ name }) {
  const { items } = useSelector((state) => state.auth);
  const data = Object.keys(groupItemsByKey(items, name));

  const [anchorEl, setAnchorEl] = useState(null);
  let endpoint, displayName;
  if (name === "category") {
    endpoint = "categories";
    displayName = "Category";
  } else if (name === "body_location") {
    endpoint = "section";
    displayName = "Section";
  }

  return (
    <Wrapper>
      <Button
        aria-controls={name}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {displayName}
      </Button>
      <Menu
        id={name}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {data.map((category) => (
          <MenuItem key={category}>
            <Link to={`/${endpoint}/${category}`}>{category}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
