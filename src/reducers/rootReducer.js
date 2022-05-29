import { INCREMENT, DECREMENT } from "../actions/action.types";

const initialState = {
  count: 0
};

export const rootReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
