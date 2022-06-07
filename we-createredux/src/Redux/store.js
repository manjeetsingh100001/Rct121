import { appActions, incrementCountAction } from "./action";
import reducer from "./reducer";
import { legacy_createStore } from "redux";

class Store {
  #reducer;
  #state;
  #listeners;
  constructor(reducer, initState) {
    // private fields
    this.#reducer = reducer;
    this.#state = initState;
    // array of listener callbacks
    // array of fns
    this.#listeners = [];
  }
  getState() {
    return this.#state;
  }
  dispatch(action) {
    // update state
    const oldState = this.#state;
    this.#state = this.#reducer(this.#state, action);
    // call all listeners
    console.log(this.#state === oldState);
    if (oldState !== this.#state) {
      this.#listeners.forEach((listener) => listener());
    }
  }
  subscribe(listener) {
    this.#listeners.push(listener);
  }
}
const initState = { count: 0 };
const store = legacy_createStore(reducer, initState);

store.subscribe(() => {
  console.log(`store has got updated!`, store.getState());
  // control, we get to decide what to do when the state gets updated
});

store.dispatch(incrementCountAction(1));
store.dispatch(incrementCountAction(2));

export default store;
