import axios from "axios";
import { batch } from "react-redux";

export const todosActions = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE"
};

// action creators
export const getTodoRequest = () => ({
  type: todosActions.GET_TODO_REQUEST
});

export const getTodoSuccess = (data) => ({
  type: todosActions.GET_TODO_SUCCESS,
  payload: data
});

export const getTodoFailure = () => ({
  type: todosActions.GET_TODO_FAILURE
});

export const getTodos = () => (dispatch, getState) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  console.log(`token is`, getState().auth.token);
  return axios({
    url: "https://json-server-mocker-masai.herokuapp.com/tasks",
    method: "GET"
  })
    .then((res) => {
      const todoSuccessAction = getTodoSuccess(res.data);
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoErrorAction = getTodoFailure();
      dispatch(todoErrorAction);
    });
};

console.log(getTodos());

// 1. auth, token
// 2. its not in the todo reducer / todo object
// 3. an API request which needs you to pass an API Key
// 4. how will you do it in this request

// action creators
export const addTodoRequest = () => ({
  type: todosActions.ADD_TODO_REQUEST
});

export const addTodoSuccess = (data) => ({
  type: todosActions.ADD_TODO_SUCCESS,
  payload: data
});

export const addTodoFailure = () => ({
  type: todosActions.ADD_TODO_FAILURE
});

export const addTodos = ({ title }) => (dispatch) => {
  const todoRequestAction = addTodoRequest();
  dispatch(todoRequestAction);
  return axios({
    url: "https://json-server-mocker-masai.herokuapp.com/tasks",
    method: "POST",
    data: {
      title,
      status: false
    }
  })
    .then((res) => {
      const todoSuccessAction = addTodoSuccess();
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoErrorAction = addTodoFailure();
      dispatch(todoErrorAction);
    });
};
