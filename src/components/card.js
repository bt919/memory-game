import Characters from "./characters";

const Card = (props) => {
  const characterNames = [
    "Naruto",
    "Itachi",
    "Kakashi",
    "Sasuke",
    "Shikamaru",
    "Jiraiya",
    "Gaara",
    "Hinata",
    "Madara",
    "Minato",
    "Nagato",
    "Obito",
    "Rock Lee",
    "Sakura",
    "Neji",
    "Deidara",
    "Orochimaru",
    "Might Guy",
    "Tsunade",
    "Hidan",
  ];
  const characters = Characters(characterNames[props.index]);

  return (
    <div className="card" onClick={() => props.handler(props.index)}>
      <img src={characters[1]} alt={characters[0]} draggable="false"></img>
      <h3>{characters[0]}</h3>
    </div>
  );
};

export default Card;
