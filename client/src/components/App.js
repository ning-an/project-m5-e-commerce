import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Categorypage from "./Categorypage";
import Companypage from "./Companypage";
import Error404 from "./Error404";
import Sectionpage from "./Sectionpage";
import SelectedCategoryPage from "./SelectedCategoryPage";
import SelectedItem from "./SelectedItem";
import SelectedSectionArea from "./SelectedSectionArea";
import SelectedCompanyPage from "./SelectedCompanyPage";
import Aboutus from "./Aboutus";
import Countrypage from "./Countrypage";
import SelectedCountryPage from "./SelectedCountryPage";
import Results from "./SearchResults";
import Cart from "./Cart";
import { fetchAllData } from "../helper/apiHelper";
import { requestAllData, receiveAllData, receiveDataError } from "../action";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(requestAllData());
    fetchAllData()
      .then((data) => dispatch(receiveAllData(data)))
      .catch((err) => dispatch(receiveDataError(err)));
  }, [dispatch]);

  return (
    <>
      <Router>
        <GlobalStyles />
        {status === "loading" ? (
          <CircularProgress />
        ) : status === "success" ? (
          <Main>
            <Header />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/categories">
                <Categorypage />
              </Route>
              <Route exact path="/categories/:category">
                <SelectedCategoryPage />
              </Route>
              <Route exact path="/item/:itemid">
                <SelectedItem />
              </Route>
              <Route exact path="/company">
                <Companypage />
              </Route>
              <Route exact path="/company/:companyId">
                <SelectedCompanyPage />
              </Route>
              <Route exact path="/countries">
                <Countrypage />
              </Route>
              <Route exact path="/countries/:country">
                <SelectedCountryPage />
              </Route>
              <Route exact path="/section">
                <Sectionpage />
              </Route>
              <Route exact path="/section/:sectionarea">
                <SelectedSectionArea />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/aboutus">
                <Aboutus />
              </Route>
              <Route path="/search/:input">
                <Results />
              </Route>
              <Route exact path="/*">
                <Error404 />
              </Route>
            </Switch>
          </Main>
        ) : (
          <Error404 />
        )}
        <Footer />
      </Router>
    </>
  );
}

const Main = styled.main``;
