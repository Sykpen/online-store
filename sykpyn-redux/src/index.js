import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./containers/MainContainer/Main";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import "./i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainSection from "./containers/MainPage";
import Contacts from "./components/Contacts";
import AdminDashboard from "./containers/AdminDashboard";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import SignInForm from "./containers/Authorization/SignInForm";
import ClientProfile from "./containers/ClientProfile";
import LoginForm from "./containers/Authorization/LoginForm";
import PrivateRoute from "./helpers/PrivateRouter";
import Header from "./components/Header";
import PrivateRouteForAdmin from "./helpers/PrivateRouterForAdmin";
import AdminForm from "./containers/Authorization/AdminForm";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainSection} />
            <PrivateRouteForAdmin
              exact
              path="/admin_dashboard"
              component={AdminDashboard}
            />
            <PrivateRoute exact path="/contacts" component={Contacts} />
            <PrivateRoute exact path="/sign_in" component={SignInForm} />
            <PrivateRoute
              exact
              path="/client_profile"
              component={ClientProfile}
            />
            <Route exact path="/admin_login" component={AdminForm} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </Router>
      </Main>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
