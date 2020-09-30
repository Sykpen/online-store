import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  console.log(rest);
  return (
    <Route>
      {isLoggedIn ? <Component {...rest} /> : <Redirect to="/login" />}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authorization.isLoggedIn,
});
export default connect(mapStateToProps, null)(PrivateRoute);
