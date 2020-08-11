import React from "react";
import { useSelector } from "react-redux";

import Pagination from "./Pagination";

export default function Homepage() {
  const { items } = useSelector((state) => state.auth);

  return <Pagination items={items} />;
}
