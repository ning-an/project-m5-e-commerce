import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

import hippo from "../assets/hippo.png";

export default function Footer() {
  return (
    <BigWrapper>
      <MainContenWrapper>
        <div style={{ width: "20%" }}>
          <Hippo src={hippo} alt="hippo" />
          <div style={{ margin: "20px 0" }}>
            When it comes to wearables, it is pgmy's pleasure to make it easy to
            access an amazing array of goods from all over the world
          </div>
          <div>
            <FaFacebookSquare style={{ margin: " 5px" }} />{" "}
            <FaTwitter style={{ margin: " 5px" }} />{" "}
            <FaInstagram style={{ margin: " 5px" }} />
          </div>
        </div>
        <LinksSection>
          <span>About</span>
          <span>Careers</span>
          <span>Support</span>
          <span>Terms of service</span>
          <span>Privacy policy</span>
        </LinksSection>
      </MainContenWrapper>
      <div style={{ padding: "20px 0", borderTop: "1px solid lightgray" }}>
        <span>© 2020 Pygmy. All rights reserved.</span>
      </div>
    </BigWrapper>
  );
}

const BigWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 72px;
  background-color: #fafafb;
`;

const MainContenWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

const Copyright = styled.div`
  color: black;
  font-family: "Handlee", cursive;
  font-size: 24px;
  z-index: -10000;
`;

const Hippo = styled.img`
  height: 50px;
`;
const LinksSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin-left: 10px;
`;
