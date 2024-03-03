import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(1);
  let incresCount = () => {
    setCounter(counter + 1);
  };
  let decreasecount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } 
  };
  return (
    <>
      <button onClick={incresCount}>increment by count {counter}</button>
      <br /> <br />
      <button onClick={decreasecount}>increment by count {counter}</button>
    </>
  );
};

export default App;
