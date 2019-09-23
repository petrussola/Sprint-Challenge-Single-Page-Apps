import React, { useEffect, useState } from "react";

import EpisodeCard from "./EpisodeCard";

export default function EpisodesList(props) {
  const { episodesList } = props;
  return (
    <div>
      {
          episodesList.map(episode => {
        return <EpisodeCard episode={episode} />;
      })
      }
    </div>
  );
}
