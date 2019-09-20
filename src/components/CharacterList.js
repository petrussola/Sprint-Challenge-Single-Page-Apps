import React, { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export default function CharacterList({
  characterList,
  serverError,
  searchResults,
  searchTerm,
  initialSearchValue
}) {
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  return (
    <section>
      <div>
        <SearchForm searchResults={searchResults} initialSearchValue={initialSearchValue} />
      </div>
      <div className="character-list">
        <div>
          <div>
            <h4>{serverError}</h4>
          </div>
          <StyledDiv className="char-list">
            {characterList.map(character => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </StyledDiv>
        </div>
      </div>
    </section>
  );
}
