import React from "react";

function Map() {
  const ar = [10, 20, 30, 40];
  const ar1 = ["apple", "mango", "grape", "orange"];
  const ar2 = ["hii", "hello", 100, 300];

  const data = [
    { name: "shashi", age: 24 },
    { name: "ranchan", age: 30 },
    { name: "sanju", age: 29 },
  ];
  return (
    <div>
      {ar.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
      {ar1.map((item) => {
        return <p style={{ color: "red", fontSize: "8px" }}>{item}</p>;
      })}

      {/* {ar2.map((item) => {
        return <p>{item}</p>;
      })} */}

      {/* printing array item inside card */}
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          {ar1.map((item) => {
            return <li className="list-group-item">{item}</li>;
          })}
        </ul>
      </div>

      {/* printing array item in card */}
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          {data.map((item) => {
            return (
              <li className="list-group-item">
                {item["name"]},{item["age"]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Map;
// write arrow function for checking odd or even in task.jxs
// books=[{bookid:b101,bname:"hhh",author:"jjh"}, upto 5]
