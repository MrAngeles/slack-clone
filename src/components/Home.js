import { useContext, useReducer, useState } from "react";
import { userContext } from "../context/userContext";

const initialState = 0;

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const five = useContext(userContext);
  console.log(five);
  return (
    <div>
      <span>{state}</span>
      <button onClick={() => dispatch("reset")}>reset</button>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
}

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      console.log("unknown");
      return state;
  }
}
