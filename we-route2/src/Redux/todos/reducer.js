import { todosActions } from "./action";

const initState = {
  loading: false,
  todos: [],
  error: false
};

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case todosActions.GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case todosActions.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: action.payload
      };
    }
    case todosActions.GET_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case todosActions.ADD_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case todosActions.ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case todosActions.ADD_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
};
