import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 30vw;
  height: auto;
  border: 1px solid #CCCCCC;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  background: #EEEEEE;
  @media (max-width: 500px) {
    width: 100vw;
  }
  img {
    border-radius: 100%;
  }
  p {
    text-align: center;
  }
`;


export default function CharacterCard({character}) {

  return (
    <StyledCard className='char-card'>
      <div>
        <img src={character.image} />
      </div>
      <h4>Name: {character.name}</h4>
      <p>{character.name} is a {character.gender.toLowerCase()} {character.species.toLowerCase()} that lives in {character.location.name} and has starred in {character.episode.length > 1 ? `${character.episode.length} episodes` : `${character.episode.length} episode`}.</p>
    </StyledCard>
    );
}
