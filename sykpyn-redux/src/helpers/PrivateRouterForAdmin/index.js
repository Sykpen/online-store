import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRouteForAdmin = ({ component: Component, isAdmin, ...rest }) => {
  return (
    <Route>
      {isAdmin ? <Component {...rest} /> : <Redirect to="/admin_login" />}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.authorization.isAdmin,
});
export default connect(mapStateToProps, null)(PrivateRouteForAdmin);
