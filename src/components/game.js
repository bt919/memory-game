import { useState, useEffect } from "react";
import Scoreboard from "./scoreboard";
import Cards from "./cards";

const Game = () => {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const [clickedCards, setClickedCards] = useState(Array(18).fill(false));
  const [randomCards, setRandomCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighscore, setCurrentHighscore] = useState(0);

  const handleClick = (index) => {
    if (clickedCards[index]) {
      setCurrentScore(0);
      setClickedCards(Array(18).fill(false));
    } else {
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > currentHighscore)
        setCurrentHighscore(currentScore + 1);
      setClickedCards(
        clickedCards.map((card, i) => {
          if (i === index) return true;
          else return card;
        })
      );
    }
  };

  useEffect(() => {
    for (let i = 0; i < cards.length; i++) {
      const random = Math.floor(Math.random() * cards.length);
      const temp = cards[i];
      cards[i] = cards[random];
      cards[random] = temp;
    }
    setRandomCards(cards);
  }, [currentScore]);

  return (
    <div className="game">
      <div className="header">
        <h2>don't click the same picture twice!</h2>
        <Scoreboard
          score={currentScore}
          highscore={currentHighscore}
        ></Scoreboard>
      </div>
      <Cards cards={randomCards} handler={handleClick}></Cards>
    </div>
  );
};

export default Game;
