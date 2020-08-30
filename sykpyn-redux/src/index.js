import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./containers/MainContainer/Main";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainSection from "./containers/MainPage";
import Contacts from "./components/Contacts";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Main>
          <Switch>
            <Route exact path="/">
              <MainSection />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </Main>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);
