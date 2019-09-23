import React from "react";

export default function EpisodeCard(props) {
  const { name, air_date, episode, characters } = props.episode;
  debugger;
  return (
    <div>
      <p>Episode {episode} is called {name} and was aired on {air_date}. It has {characters.length} characters.</p>
    </div>
    );
}
