import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import NavBar from "./NavBar";
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
import Cart from "./Cart";
<<<<<<< Updated upstream
import { fetchAllData } from "../helper/apiHelper";
import { requestAllData, receiveAllData, receiveDataError } from "../action";
import CircularProgress from "@material-ui/core/CircularProgress";
=======
>>>>>>> Stashed changes

export default function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(requestAllData());
    fetchAllData()
      .then((data) => dispatch(receiveAllData(data)))
      .catch((err) => dispatch(receiveDataError(err)));
  }, []);

  return (
    <>
      <Router>
        <GlobalStyles />
<<<<<<< Updated upstream
        <Header />
        {status === "loading" ? (
          <CircularProgress />
        ) : status === "success" ? (
          <Main>
            <NavBar />
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
              <Route exact path="/company/:companyid">
                <SelectedCompanyPage />
              </Route>
              <Route exact path="/section">
                <Sectionpage />
              </Route>
              <Route exact path="/section/:sectionarea">
                <SelectedSectionArea />
              </Route>
              <Route>
                <Cart exact path="/cart" />
              </Route>
              <Route exact path="/aboutus">
                <Aboutus />
              </Route>
            </Switch>
          </Main>
        ) : (
          <Error404 />
        )}
=======
        <Main>
          <Header />
          <NavBar />
        </Main>
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
          <Route exact path="/company/:companyid">
            <SelectedCompanyPage />
          </Route>
          <Route exact path="/section">
            <Sectionpage />
          </Route>
          <Route exact path="/section/:sectionarea">
            <SelectedSectionArea />
          </Route>
          <Route>
            <Cart exact path="/cart" />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/error/404">
            <Error404 />
          </Route>
        </Switch>
>>>>>>> Stashed changes
        <Footer />
      </Router>
    </>
  );
}

const Main = styled.main``;

// ning's comment

// Rupy's comment

// Mrwan's comment lol
