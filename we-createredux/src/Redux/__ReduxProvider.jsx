import React, { useState } from "react";
import store from "./store";

export const ReduxContext = React.createContext();

function ReduxProvider({ children }) {
  const [___INTERNAL__count__HACK, forceUpdate] = useState(0);

  store.subscribe(() => {
    forceUpdate((prev) => prev + 1);
  });

  return (
    <ReduxContext.Provider
      value={[store.getState.bind(store), store.dispatch.bind(store)]}
    >
      {children}
    </ReduxContext.Provider>
  );
}

export default ReduxProvider;