import React from "react";
import Data from "./data";
import Destination from "./Destination";

export default function App() {
  const holidays = Data.map((place) => {
    return <Destination key={place.title} place={place} />;
  });
  return <div>{holidays}</div>;
}
