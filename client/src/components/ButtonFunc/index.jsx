import React, { useState } from "react";

const ButtonFunc = () => {
  const [increment, setIncrement] = useState(1);

  const decrease = () => {
    setIncrement(increment - 1);

    if (increment == 0) {
      setIncrement(increment == 0);
    }
  };

  const increase = () => {
    setIncrement(increment + 1);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-2 w-[150px] border">
        <button onClick={() => decrease()} className="text-2xl">
          -
        </button>
        <p>{increment}</p>
        <button onClick={() => increase()} className="text-2xl">
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonFunc;
