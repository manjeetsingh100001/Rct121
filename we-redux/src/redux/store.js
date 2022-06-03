import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { todosReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});

const store = createStore(rootReducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(`state`, store.getState());

export default store;
