import React from "react";
import Gamelist from "./Gamelist";

const Content = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Gamelist src="http://localhost:3000//Tomb-runner.png" />
      <Gamelist src="http://localhost:3000//Tomb-runner.png" />
      <Gamelist src="http://localhost:3000//Tomb-runner.png" />
      <Gamelist src="http://localhost:3000//Tomb-runner.png" />
      <Gamelist src="http://localhost:3000//Tomb-runner.png" />
    </div>
  );
};

export default Content;
