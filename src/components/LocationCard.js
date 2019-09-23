import React from "react";

export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.location;
  debugger;
  return (
    <div>
      <p>{name}: is of {type} type, is located in {dimension} dimension and has {residents.length} residents.</p>
    </div>
    );
}
