import React from "react";

export default function CharacterCard({character}) {

  return (
    <div>
      <div>
        <img src={character.image} />
      </div>
      <h4>Name: {character.name}</h4>
      <p>{character.name} is a {character.gender.toLowerCase()} {character.species.toLowerCase()} that lives in {character.location.name} and has starred in {character.episode.length} episodes.</p>
    </div>
    );
}
