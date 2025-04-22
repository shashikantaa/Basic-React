import React from "react";
import ComboBox from "./Combobox";
import ColorButtons from "./Button";
import MediaCard from "./Card";
import RecipeReviewCard from "./Card";
function Mui() {
  return (
    <div>
      <ComboBox />
      <ColorButtons />
      <RecipeReviewCard
        title="Shashi"
        date="March 15 2024"
        info=" This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
    </div>
  );
}

export default Mui;

// in reacthook there is useStateHook and useffect
//import {useState} from "react"
//const[color,setColor]=useState("red") color place is statevalues, setcolor is update, red is initial value
// to print the value {color}
