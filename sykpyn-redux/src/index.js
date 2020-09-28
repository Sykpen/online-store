import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./containers/MainContainer/Main";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import "./i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainSection from "./containers/MainPage";
import Contacts from "./components/Contacts";
import AdminDashboard from "./containers/AdminDashboard";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import SignInForm from "./containers/Authorization/SignInForm";
import ClientCabinet from "./containers/ClientCabinet";
import LoginForm from './containers/Authorization/LoginForm'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
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
            <Route path="/admin_dashboard">
              <AdminDashboard />
            </Route>
            <Route path="/sign_in">
              <SignInForm />
            </Route>
            <Route path="/client_cabinet">
              <ClientCabinet />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </Main>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);
