import React from "react";
import Secondcom from "./Secondcom";

function Firstcom() {
  const data = [
    { id: 1234, bname: "jhom", stock: 57, sales: 70 },
    { id: 1432, bname: "shashi", stock: 30, sales: 25 },
    { id: 1200, bname: "thomas", stock: 50, sales: 10 },
    { id: 1300, bname: "raju", stock: 90, sales: 60 },
    { id: 1400, bname: "kimmy", stock: 17, sales: 20 },
  ];
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="container">
            <Secondcom books={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Firstcom;
