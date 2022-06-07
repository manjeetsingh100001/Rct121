import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { counterReducer } from "./counter/reducer";
import { todosReducer } from "./todos/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  auth: authReducer
});



const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(`state`, store.getState());

export default store;
