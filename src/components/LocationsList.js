import React, { useEffect, useState } from "react";

import LocationCard from "./LocationCard";

export default function LocationsList({ locationsList }) {
  return (
    <div>
      {
          locationsList.map(location => {
        return <LocationCard location={location} />;
      })
      }
    </div>
  );
}
