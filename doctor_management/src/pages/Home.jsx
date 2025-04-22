import React from "react";
import "./mystylepage.css";

function Home() {
  return (
    <form className="container">
      <div className="conbine">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousell"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://wallpapercave.com/wp/wp2968489.jpg"
                className="d-block w-100 img"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://th.bing.com/th?id=OIP.g0ycHVvjv6-JqFrHpWQkEwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                className="d-block w-100 img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th?id=OIP.XYhUNl__W7GOJSUGvpyA3gHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                className="d-block w-100 img"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div style={{ width: "200px", height: "400px", marginLeft: "70px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            beatae enim magni repellendus officia in earum architecto ratione
            sint voluptate pariatur. Labore autem aliquid eaque eos
            exercitationem tempora aliquam eveniet?
          </p>
        </div>
      </div>
      <a href="book" class="btn btn-btn book" role="button">
        Book Doctor
      </a>
    </form>
  );
}

export default Home;
