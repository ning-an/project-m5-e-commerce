import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Pagination from "./Pagination";

export default function SelectedCategoryPage() {
  const { items } = useSelector((state) => state.auth);
  const { category } = useParams();

  let findCategory = items.filter((cat) => {
    return cat.category === category;
  });

  return <Pagination items={findCategory} />;
}
