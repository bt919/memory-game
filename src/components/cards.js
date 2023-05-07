import Card from "./card";

const Cards = (props) => {
  return (
    <div className="cards">
      {props.cards.map((card) => (
        <Card key={card} index={card} handler={props.handler}></Card>
      ))}
    </div>
  );
};

export default Cards;
