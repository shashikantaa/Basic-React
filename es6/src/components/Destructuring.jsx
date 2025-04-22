import React from "react";

function Destructuring() {
  const a = ["shashi", 26, "jhon", "karin"];
  const [s, d, f, g] = a;

  return (
    <div>
      <p>{a[0]}</p>
      <p>{s}</p>
    </div>
  );
}

export default Destructuring;
