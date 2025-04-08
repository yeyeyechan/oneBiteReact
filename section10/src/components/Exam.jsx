import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
};
const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const onPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  const onMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
};
export default Exam;
