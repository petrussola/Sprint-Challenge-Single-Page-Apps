import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  .nav-menu {
    width: 33%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      a {
        margin: 1rem 0;
        font-size: 2rem;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        border-bottom: 1px dashed #cccccc;
      }
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </div>
    </StyledHeader>
  );
}
