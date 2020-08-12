import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from "@material-ui/lab";

import { ItemPage } from "./Items/ItemPage";

export default function PaginatePage({ items }) {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const handleChange = (_, value) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setcurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Wrapper>
      <View>
        <label htmlFor="page">View</label>
        <select
          name="page"
          id="page"
          onChange={(e) => setitemsPerPage(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </View>
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

const View = styled.div`
  align-self: flex-end;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const StyledPagination = styled(Pagination)`
  align-self: flex-end;
`;
