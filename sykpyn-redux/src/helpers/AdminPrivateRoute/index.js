import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminPrivateRoute = ({
  component: Component,
  currentAdminId,
  ...rest
}) => {
  return (
    <Route>
      {currentAdminId ? (
        <Component {...rest} />
      ) : (
        <Redirect to="/admin_login" />
      )}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  currentAdminId: state.authorization.currentAdminId,
});
export default connect(mapStateToProps, null)(AdminPrivateRoute);
