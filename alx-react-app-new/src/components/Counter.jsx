import { useState } from "react";

export const Counter = function () {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    marginRight: "10px",
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increase{" "}
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        {" "}
        Decrease{" "}
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset{" "}
      </button>

      <p>Current Count: {count}</p>
    </div>
  );
};
