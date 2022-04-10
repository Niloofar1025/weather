import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const headlines = [
    { title: "Hello, World!" },
    { title: "Hello, World 2!" },
    { title: "Hello, World 3!" },
    { title: "Hello, World 4!" }
  ];
  return (
    <div className="App">
      {headlines.map((headline, index) => (
        <Headline key={index} title={headline.title} />
      ))}{" "}
    </div>
  );
}

function LikeCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  );
}

// React DOM mounting code below

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
