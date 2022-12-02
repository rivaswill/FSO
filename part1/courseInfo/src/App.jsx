import { useState } from "react";
import "./App.css";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ parts }) => {
  const [counter, setCounter] = useState(parts.exercises)
  setTimeout( ()=> setCounter(counter),10000)
  return (
    <>
      <p>{parts.name + " " + counter}</p>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((e,i) => <Part key={i} parts={e} />)}
    </>
  );
};
const Total = ({ total }) => {
  return <p>Total {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  let TOTAL = 0;
  course.parts.forEach((e) => (TOTAL += e.exercises));
  return (
    <div className="App">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={TOTAL} />
    </div>
  );
};

export default App;
