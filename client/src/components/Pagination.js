import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Pagination } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { ItemPage } from "./Items/ItemPage";
import {
  changeSuccessSnackBarStatus,
  changeFailureSnackBarStatus,
} from "../action";
import BackToTop from "./BackToTop";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function PaginatePage({ items }) {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (_, value) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setcurrentPage(value);
  };

  const handlePurchaseSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(changeSuccessSnackBarStatus(false));
  };

  const handlePurchaseFailureClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(changeFailureSnackBarStatus(false));
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
      <Snackbar
        open={state.snackBarSuccess}
        autoHideDuration={8000}
        onClose={handlePurchaseSuccessClose}
      >
        <Alert onClose={handlePurchaseSuccessClose} severity="success">
          Order successful. Thank you for shopping with Pygmy!
        </Alert>
      </Snackbar>
      <Snackbar
        open={state.snackBarFailure}
        autoHideDuration={8000}
        onClose={handlePurchaseFailureClose}
      >
        <Alert onClose={handlePurchaseFailureClose} severity="error">
          Something went very wrong. Please contact customer support.
        </Alert>
      </Snackbar>
      <BackToTop />
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
