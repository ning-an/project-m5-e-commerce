import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

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

<<<<<<< Updated upstream
// ning's comment

// Rupy's comment

// Mrwan's comment lol
=======
export default App;
>>>>>>> Stashed changes
