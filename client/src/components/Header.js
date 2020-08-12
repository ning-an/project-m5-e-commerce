import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";

import hippo from "../assets/hippo.png";
import { IoIosCart } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { getItemsQuantityInCart } from "../helper/utils";
import { COLORS } from "./constants";
import { storeSearchResults } from "../action";

export default function Header() {
  let history = useHistory();
  const dispatch = useDispatch();
  const refFocus = useRef(null);
  const { cart, auth } = useSelector((state) => state);
  const [openSearchTray, setOpenSearchTray] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  let suggestedItems;
  if (searchInput.length >= 2) {
    suggestedItems = auth.items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  const handleOpenSearch = () => {
    setOpenSearchTray(!openSearchTray);
    setSearchInput("");
    if (!openSearchTray) {
      setTimeout(() => refFocus.current.focus(), 200);
    }
  };

  const endSearch = () => {
    setOpenSearchTray(false);
    setSearchInput("");
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      endSearch();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`./search/${searchInput}`);
    dispatch(storeSearchResults(suggestedItems));
    setOpenSearchTray(false);
  };

  const handleReset = () => {
    setSearchInput("");
    refFocus.current.focus();
  };

  return (
    <>
      <Wrapper>
        <Slogan>When it comes to wearables</Slogan>
        <Trademark>
          <Hippo src={hippo} alt="hippo" />
          <Logo>Pygmy</Logo>
        </Trademark>
        <Actions>
          <SearchBar onClick={handleOpenSearch}>
            <RiSearchLine />
          </SearchBar>
          <NavLink exact to="/cart">
            <IoIosCart style={{ fontSize: "2em" }} />
            {getItemsQuantityInCart(cart)}
          </NavLink>
        </Actions>
      </Wrapper>
      {openSearchTray && (
        <SearchTray>
          <form
            onKeyDown={handleEscape}
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              ref={refFocus}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="reset" name="reset">
              <TiDeleteOutline style={{ fontSize: "1.5em" }} />
            </button>
            <button type="submit" name="submit">
              GO
            </button>
            <button onClick={endSearch}>Cancel</button>
          </form>
        </SearchTray>
      )}
      {openSearchTray && suggestedItems && (
        <SuggestedArea>
          {suggestedItems.slice(0, 5).map((item) => {
            const startIndex = item.name
              .toLowerCase()
              .indexOf(searchInput.toLowerCase());
            const endIndex = startIndex + searchInput.length;
            return (
              <li key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <span>{item.name.slice(0, startIndex)}</span>
                  <Matched>{item.name.slice(startIndex, endIndex)}</Matched>
                  <span>{item.name.slice(endIndex)}</span>
                  <Category> in {item.category}</Category>
                </Link>
              </li>
            );
          })}
        </SuggestedArea>
      )}
    </>
  );
}

const Wrapper = styled.h3`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Slogan = styled.span`
  color: black;
  font-family: "Handlee", cursive;
  width: 215px;
`;

const Trademark = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;

const Logo = styled.span`
  font-family: "Limelight", cursive;
  color: ${COLORS.font};
  font-size: 36px;
`;

const Hippo = styled.img`
  height: 50px;
`;

const SearchBar = styled.button`
  /* display: inline; */
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 215px;
`;

const SearchTray = styled.div`
  width: 100%;
  padding: 20px;

  form {
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    width: 60%;
    border-bottom: ${COLORS.font} solid 1px;
    font-size: 1.5em;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-right: 5px;
    border: none;
    background-color: ${COLORS.bg};
    color: ${COLORS.font};
    width: 60px;
    height: 30px;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px lightgray;
    font-size: 16px;
  }
`;

const SuggestedArea = styled.ul`
  position: absolute;
  top: 130px;
  left: 20px;
  opacity: 0.9;
  z-index: 5;
  background-color: #fafafa;
  line-height: 2em;
  width: 60%;

  li {
    padding: 5px;

    &:hover {
      transform: scale(1.01);
      border: ${COLORS.font} solid 1px;
    }
  }

  a {
    color: grey;
  }
`;

const Matched = styled.span`
  font-weight: bold;
  color: black;
`;

const Category = styled.span`
  color: ${COLORS.font};
  font-style: italic;
  font-size: 16px;
`;
