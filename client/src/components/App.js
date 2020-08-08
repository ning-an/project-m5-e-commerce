import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <Main>
      <Header />
      <NavBar />
      <div>Content clickables go here</div>
      <Footer />
    </Main>
  );
}

const Main = styled.main``;

// ning's comment

// Rupy's comment

// Mrwan's comment lol
