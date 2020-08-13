import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function SmallCompany({ company }) {
  const history = useHistory();
  function navigateCompanyPage(e) {
    e.stopPropagation();
    history.push(`/company/${company.id}`);
  }
  return (
    <Wrapper tabIndex="0" onClick={navigateCompanyPage}>
      <p>{company.name}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px -11px rgba(255, 182, 193, 0.75);
  border: 3px solid lightpink;
  border-radius: 7px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
  p {
    text-align: center;
    opacity: 100%;
    font-size: 15px;
  }
`;
