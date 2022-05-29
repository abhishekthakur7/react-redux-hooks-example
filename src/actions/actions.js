import { INCREMENT, DECREMENT } from "./action.types";

export const incrementCount = (message) => {
  return {
    type: INCREMENT
  };
};

export const decrementCount = (message) => {
  return {
    type: DECREMENT
  };
};
