import { appActions } from "./action";

const initState = {
  count: Number(localStorage.getItem("counter")) || 0
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case appActions.INCREMENT_COUNT: {
      const value = state.count + action.payload;
      localStorage.setItem("counter", value);
      return {
        ...state,
        count: value
      };
    }
    case appActions.DECREMENT_COUNT: {
      const value = state.count - action.payload;
      localStorage.setItem("counter", value);
      return {
        ...state,
        count: value
      };
    }
    default:
      return state;
  }
};
