import { useState } from "react";
import "./App.css";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Anecdotes = ({ anecdotes, votes, tittle }) => {
  return (
    <div className="card">
      <h2>{tittle}</h2>
      <p>{anecdotes}</p>
      <p className="text">has {votes} votes.</p>
    </div>
  );
};
const Button = ({ txt, handle }) => <button onClick={handle}>{txt}</button>;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 0 });
  const [ranked, setRanked] = useState([0, 0]);

  const selectAnectdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    const votesCopy = { ...votes };
    setSelected(random);
    votesCopy[random] ? votesCopy[random] : (votesCopy[random] = 0);
    setVotes(votesCopy);
  };

  const addVote = () => {
    const votesCopy = { ...votes };
    votesCopy[selected] += 1;
    setVotes(votesCopy);

    ranked[1] <= votesCopy[selected]
      ? setRanked([selected, votesCopy[selected]])
      : ranked;
  };

  return (
    <div>
      <Anecdotes
        tittle="Anecdote of the day"
        anecdotes={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button handle={addVote} txt="vote" />
      <Button handle={selectAnectdote} txt="next anecdote" />
      <Anecdotes
        tittle="Anecdote with most votes"
        anecdotes={anecdotes[ranked[0]]}
        votes={ranked[1]}
      />
    </div>
  );
};

export default App;
