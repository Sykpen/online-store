import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const clientPrivateRoute = ({
  component: Component,
  currentLoginClientId,
  isAdmin,
  ...rest
}) => {
  console.log(currentLoginClientId);
  console.log(isAdmin);
  return (
    <Route>
      {currentLoginClientId ? (
        <Component {...rest} />
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  currentLoginClientId: state.authorization.currentLoginClientId,
  isAdmin: state.authorization.isAdmin,
});
export default connect(mapStateToProps, null)(clientPrivateRoute);
