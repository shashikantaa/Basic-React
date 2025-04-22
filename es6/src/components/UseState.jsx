import React from "react";
import { useState } from "react";

function UseState() {
  //const ar1 = ["apple", "mango", "grape", "orange"];
  const [counter, setCounter] = useState(0);
  const [fruit, setFruit] = useState(["apple", "mango", "grape", "orange"]);
  return (
    <>
      <div>
        UseState
        <p>count: {counter}</p>
        <button
          className="btn btn-success"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
      </div>
      <div>
        UseState
        <p>count: {fruit}</p>
        <button
          className="btn btn-success"
          onClick={() => setFruit(["apple", "banana"])}
        >
          change fruit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setFruit([...fruit, "mango"])}
        >
          Addfruit
        </button>
      </div>
    </>
  );
}

export default UseState;
