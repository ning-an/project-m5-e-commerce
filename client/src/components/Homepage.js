import React from "react";
import { useSelector } from "react-redux";

import Pagination from "./Pagination";
import Slideshow from "./Slides";

export default function Homepage() {
  const { items } = useSelector((state) => state.auth);

  return (
    <>
      <Slideshow />
      <Pagination items={items} />;
    </>
  );
}
