import React from "react";

function Display(props) {
  return (
    <div>
      <h3>{props.name} data</h3>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>Address: {props.address}</li>
        <li>Phone: {props.tel}</li>
      </ul>
    </div>
  );
}

export default Display;

//const data=[{id:1234,bname:"jhom",stock:57,sales:70},{id:1432,bname:"shashi",stock:30,sales:25}];
// 2component 1st array map the data and call the 2nd component inside map function
//and design second component//inside 2nd component used card and display the data
// condition if stock>sales?availables:out of stock.
