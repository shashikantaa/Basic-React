import React from "react";

function Taskk() {
  const Evenodd = (a) => {
    let result;
    if (a % 2 === 0) {
      result = "even";
    } else {
      result = "odd";
    }
    const books = [
      { bookid: "b101", bname: "book1", author: "shashi" },
      { bookid: "b102", bname: "book2", author: "shashikanta" },
      { bookid: "b103", bname: "book3", author: "shashilaikhuram" },
      { bookid: "b104", bname: "book4", author: "ranchan" },
      { bookid: "b105", bname: "book5", author: "tommy" },
    ];
    return (
      <>
        <h1>The result is {result}</h1>
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {books.map((item) => {
              return (
                <li className="list-group-item">
                  {item["bookid"]} {item["bname"]} {item["author"]}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  };
  return <div>{Evenodd(2)}</div>;
}

export default Taskk;
