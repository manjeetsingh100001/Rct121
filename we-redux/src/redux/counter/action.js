// action creators
// function that returns your action

export const appActions = {
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT"
  };
  
  export const incrementCountAction = (count) => {
    return {
      type: appActions.INCREMENT_COUNT,
      payload: count
    };
  };
  