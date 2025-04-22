import React from "react";

function Secondcom(props) {
  return (
    <div>
      <div class="card w-75 mb-3">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            {props.books.id} {props.books.bname} {props.books.stock}{" "}
            {props.books.sales}
          </p>
          <a href="#" class="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default Secondcom;
