import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

export const BuyBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${COLORS.bg};
  color: ${COLORS.font};
  width: 100%;
  height: 50px;
`;
