import React from "react";

function ArrowFunctions() {
  // single line functuions
  const Addnumber = (a, b) => a + b;

  //   arrow functions with jxs return statement
  const Addtwonumber = () => {
    return <h1>hello</h1>;
  };

  //   arrow functions with jxs multiple return statement

  const Adnumber = () => {
    return (
      <>
        <h1>hello</h1>
        <p>hello</p>
      </>
    );
  };

  const Square = (a) => {
    let result = a * a;
    return (
      <>
        <h1>square of a number is {result}</h1>
      </>
    );
  };

  return (
    <div>
      {Addnumber(10, 20)}
      <Addtwonumber />
      <Adnumber />
      {Square(2)}
    </div>
  );
}

export default ArrowFunctions;
