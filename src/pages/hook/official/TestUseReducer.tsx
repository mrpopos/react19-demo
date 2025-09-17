import React, { useReducer } from "react";

const TestUseReducer = () => {
  const [state, dispatch] = useReducer(({counter}, action) => {
    switch (action.type) {
      case "reset":
        return { count: 0 };
        break;
      case "increment":
        return { count: state.count + 1 };
        break;
      case "decrement":
        return { count: state.count - 1 };
        break;
    }
  });
  return <div>TestUseReducer</div>;
};

export default TestUseReducer;
