import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("pink");
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="container-fluid vh-100 text-light d-flex align-items-end"
      >
        <div className="container bg-light mb-5 shadow-lg p-3 bg-body round2 d-flex justify-content-evenly align-items-center">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
            className="btn round2"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="btn round2"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="btn  round2"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
            className="btn round2"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
            className="btn round2"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("aqua")}
            style={{ backgroundColor: "aqua" }}
            className="btn round2"
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("lavender")}
            style={{ backgroundColor: "lavender" }}
            className="btn round2"
          >
            Lavender
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
