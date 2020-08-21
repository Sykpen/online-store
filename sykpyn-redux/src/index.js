import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
