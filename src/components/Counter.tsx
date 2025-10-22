import { useAtom } from "jotai";
import React from "react";
import { countAtom } from "../jotai/countAtom";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <button
        className="m-5 rounded-2xl bg-gray-600 p-1  text-white text-4xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className="m-5 rounded-2xl bg-gray-600 p-1 text-white text-4xl"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
