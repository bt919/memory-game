const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <h3>current score: {props.score}</h3>
      <h3>high score: {props.highscore}</h3>
    </div>
  );
};

export default Scoreboard;
