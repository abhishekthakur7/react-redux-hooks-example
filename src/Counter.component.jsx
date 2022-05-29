import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./actions/actions";

const Counter = () => {
  const { count, initalData } = useSelector((state) => state);
  const dispatch = useDispatch();
  //prints complete state object
  console.log(useSelector((state) => state));
  console.log(dispatch); //is a function

  return (
    <div>
      <button onClick={() => dispatch(incrementCount())}>+</button>
      Count is {count}
      <button onClick={() => dispatch(decrementCount())}>-</button>
      <br />
      {initalData}
    </div>
  );
};

export default Counter;
