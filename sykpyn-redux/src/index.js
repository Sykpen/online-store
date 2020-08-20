import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main/Main";
import AreaToShow from "./components/AreaToShow/AreaToShow";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { rootReduser } from "./redusers/rootReduser";

const store = createStore(
  rootReduser,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
      <AreaToShow />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
