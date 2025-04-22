import React from "react";

function Ternaryoperator() {
  var flag = false;
  return (
    <div>
      {flag ? (
        //if you want to include more then one inside js use parent tag <> </>
        <>
          <button className="btn btn-success">success</button>
          <p></p>
        </>
      ) : (
        <button className="btn btn-danger">Danger</button>
      )}
    </div>
  );
}

export default Ternaryoperator;
//modules have two export: default edport and named export;
//default export can export only once in a page while named export can export multiple time in a [page].
