import React from "react";

function Event() {
  const display = () => {
    alert("hello already create user");
  };
  const hello = (name) => {
    alert("hii hello" + name);
  };
  return (
    <div>
      <button onClick={display}>Click me</button>
      <button onClick={() => hello("jhon")}>say hello</button>
    </div>
  );
}

export default Event;
