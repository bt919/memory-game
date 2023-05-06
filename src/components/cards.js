import { useState } from "react";
import Card from "./card";

const Cards = () => {
  const [cards, setCards] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
