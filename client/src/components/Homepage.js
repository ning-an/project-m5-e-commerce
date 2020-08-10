import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Pagination } from "@material-ui/lab";

import { ItemPage } from "./Items/ItemPage";

export default function Homepage() {
  const { items, companies, status } = useSelector((state) => state.auth);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 30;
  const handleChange = (_, value) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setcurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Wrapper>
      <ItemPage items={currentItems} />
      <StyledPagination
        count={Math.ceil(items.length / itemsPerPage)}
        siblingCount={2}
        size="large"
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPagination = styled(Pagination)`
  align-self: flex-end;
`;
