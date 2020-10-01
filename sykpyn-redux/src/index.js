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
import RegisterForm from "./containers/Authorization/RegisterForm";
import ClientProfile from "./containers/ClientProfile";
import ClientLoginForm from "./containers/Authorization/ClientLoginForm";
import ClientPrivateRoute from "./helpers/clientPrivateRoute";
import Header from "./components/Header";
import AdminPrivateRoute from "./helpers/AdminPrivateRoute";
import AdminRegistrationForm from "./containers/Authorization/AdminRegistrationForm";

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
            <AdminPrivateRoute
              exact
              path="/admin_dashboard"
              component={AdminDashboard}
            />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/sign_in" component={RegisterForm} />
            <ClientPrivateRoute
              exact
              path="/client_profile"
              component={ClientProfile}
            />
            <Route exact path="/admin_login" component={AdminRegistrationForm} />
            <Route exact path="/login" component={ClientLoginForm} />
          </Switch>
        </Router>
      </Main>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
