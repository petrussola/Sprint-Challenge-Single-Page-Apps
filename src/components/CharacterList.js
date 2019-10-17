import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

`;

export default function CharacterList(props) {
  const { characterList, serverError } = props;
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  return (
    <section className="character-list">
      <div>
        <div>
          <h4>{serverError}</h4>
        </div>
        <StyledDiv className='char-list'>
          {characterList.map(character => {
            return <CharacterCard character={character} />;
          })}
        </StyledDiv>
      </div>
    </section>
  );
}
