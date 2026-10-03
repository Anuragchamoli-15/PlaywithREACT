import { useReducer } from "react";
import style from "./Style.module.css";

function Reduceer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "ADD5") {
    return state + 5;
  } else if (action.type === "SUB5") {
    return state - 5;
  } else if (action.type === "ADD10") {
    return state + 10;
  } else if (action.type === "SUB10") {
    return state - 10;
  } else if (action.type === "RESET") {
    return (state = 0);
  }

  return state;
}

export function Counter() {
  const [count, dispatch] = useReducer(Reduceer, 0);

  return (
    <div className={style.container}>
      <div className={style.Counter}>
        <h1>{count}</h1>
        <div className={style.buttons}>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Count +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Count -
          </button>
          <button onClick={() => dispatch({ type: "ADD5" })}>Add 5+</button>
          <button onClick={() => dispatch({ type: "SUB5" })}>Sub 5-</button>
          <button onClick={() => dispatch({ type: "ADD10" })}>Add 10+</button>
          <button onClick={() => dispatch({ type: "SUB10" })}>sub 10-</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset </button>
        </div>
      </div>
    </div>
  );
}
