import React from "react";
import ArrowFunctions from "../components/ArrowFunctions.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";
import Map from "../components/Map.jsx";
import Task from "../components/Taskk.jsx";
import Spreadoperator from "../components/Spreadoperator.jsx";
import Ternaryoperator from "../components/Ternaryoperator.jsx";
import shot from "../components/modules.js";
import { address, age, display, name } from "../components/modules.js";
import Display from "../components/props.jsx";
import Destructuring from "../components/Destructuring.jsx";
import Firstcom from "../components/Firstcom.jsx";
import Event from "../components/Event.jsx";

function Es66() {
  shot();
  display();
  return (
    <>
      <ArrowFunctions />
      <h1 className="h">hello</h1>
      <Map />
      <Task />
      <Spreadoperator />
      <Ternaryoperator />
      <Destructuring />
      <p>{name}</p>
      <p>{address}</p>
      <p>{age}</p>
      <Display name="jhon" age="34" address="phaknung" tel="7085199532" />
      {/* passing value multiple time */}
      <Display name="shahil" age={age} address="sawombung" tel="7085199532" />
      <Display name="shashi" age="26" address="guja" tel="7085199532" />
      <Firstcom />
      <Event />
    </>
  );
}

export default Es66;
