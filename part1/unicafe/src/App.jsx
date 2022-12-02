import { useState } from "react";
import "./App.css";

const Data = ({ txt, value }) => (
  <tr>
    <td>{txt}</td>
    <td>{value}</td>
  </tr>
);

const Estadistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad,
    average = ((good - bad) / total).toFixed(2),
    positive = (good / total).toFixed(4) * 100;
  return (
    <div>
      <h2>statistics</h2>
      {good || neutral || bad ? (
        <table className="text">
          <Data txt={"Good"} value={good} />
          <Data txt={"Neutral"} value={neutral} />
          <Data txt={"Bad"} value={bad} />
          <Data txt={"All"} value={total} />
          <Data txt={"Average"} value={average} />
          <Data txt={"Positive"} value={positive + '%'} />
        </table>
      ) : (
        <p className="text">No feedback given</p>
      )}
    </div>
  );
};

const Button = ({ txt, handle }) => <button onClick={handle}>{txt}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodFeed = () => {
    setGood(good + 1);
  };
  const setNeutralFeed = () => {
    setNeutral(neutral + 1);
  };
  const setBadFeed = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button txt="Good" handle={setGoodFeed} />
      <Button txt="Neutral" handle={setNeutralFeed} />
      <Button txt="Bad" handle={setBadFeed} />

      <Estadistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
