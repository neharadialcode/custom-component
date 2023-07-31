import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count > 0 && count < 10 ? (
        <h1>{count}</h1>
      ) : (
        <>{count <= 0 ? <h1>0</h1> : <h1>10</h1>}</>
      )}

      <button onClick={() => setCount(count + 1)}>PLUS</button>
      <button onClick={() => setCount(count - 1)}>MINUS</button>
    </div>
  );
};

export default Count;
