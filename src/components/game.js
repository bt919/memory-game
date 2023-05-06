import { useState } from "react";
import Scoreboard from "./scoreboard";
import Cards from "./cards";

const Game = () => {
  return (
    <div className="game">
      <div className="header">
        <h2>don't click the same picture twice!</h2>
        <Scoreboard></Scoreboard>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Game;
