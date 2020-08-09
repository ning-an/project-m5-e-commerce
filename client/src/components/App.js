import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
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

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
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
        <Footer />
      </Router>
    </>
  );
}

const Main = styled.main``;

// ning's comment

// Rupy's comment

// Mrwan's comment lol
