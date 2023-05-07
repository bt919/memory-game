const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <h3>current score: {props.score}</h3>
      <h3>
        high score:{" "}
        {props.highscore < 18
          ? props.highscore
          : `${props.highscore} (max score achieved)`}
      </h3>
    </div>
  );
};

export default Scoreboard;
