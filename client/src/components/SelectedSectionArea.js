import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Pagination from "./Pagination";

export default function SelectedSectionArea() {
  const { items } = useSelector((state) => state.auth);
  const { sectionarea } = useParams();

  let findBodies = items.filter((body) => {
    return body.body_location === sectionarea;
  });

  return <Pagination items={findBodies} />;
}
