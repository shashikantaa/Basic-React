import React from "react";

function Spreadoperator() {
  const r = ["a", "b", "c", "d", "e"];
  const j = [...r, 4, 5, 6];
  const obj = [
    { name: "shashi", roll: 123, age: 23 },
    { name: "shashikanta", roll: 124, age: 24 },
    { name: "shas", roll: 125, age: 25 },
  ];
  const obj1 = [...obj, { name: "hello", roll: 111, age: 30 }];
  const obj11 = { name: "hello", roll: 111, age: 30 };
  const obj2 = { ...obj11, tel: 18662552 };
  const { name, roll, age, tel } = obj2;

  return (
    <div>
      <p>
        {j.map((item) => {
          return <h3>{item}</h3>;
        })}
      </p>
      <p>{...r}</p>
      <p>
        {obj1.map((item) => {
          return (
            <h3>
              {item["name"]} {item["roll"]} {item["age"]}
            </h3>
          );
        })}
      </p>
      <h2>{name}</h2>
      <h2>{roll}</h2>
      <h2>{age}</h2>
      <h2>{tel}</h2>
    </div>
  );
}

export default Spreadoperator;
