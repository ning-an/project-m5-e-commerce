import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

import { get15RandomItems } from "./handlers";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  const { items } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      <Fade {...properties}>
        {get15RandomItems(items).map((item) => {
          return (
            <Link key={item.id} to={`/item/${item.id}`}>
              <img src={item.imageSrc} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
          );
        })}
      </Fade>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  margin: auto;
  padding: 30px 75px;
  text-align: center;

  img {
    width: 250px;
    margin-bottom: 40px;
  }
`;

export default Slideshow;
