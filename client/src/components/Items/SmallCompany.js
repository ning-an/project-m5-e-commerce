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
  box-shadow: 0px 0px 16px -11px rgba(0, 0, 0, 0.75);
  border: 2px solid navy;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  p {
    text-align: center;
    opacity: 100%;
  }
`;
