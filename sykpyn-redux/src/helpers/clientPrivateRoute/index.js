import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const clientPrivateRoute = ({
  component: Component,
  currentLoginClientId,
  ...rest
}) => {
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
});
export default connect(mapStateToProps, null)(clientPrivateRoute);
