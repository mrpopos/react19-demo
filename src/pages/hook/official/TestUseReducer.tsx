import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { counter: 0 };
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const TestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h1>当前计数: {state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        重置
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        减少
      </button>
    </div>
  );
};

export default TestUseReducer;
