import React from "react";
import { connect } from "react-redux";

const AreaToShow = ({ myInfo }) => {
  if (!myInfo.length) {
    return <div>Информация появится по клику</div>;
  }
  return <div>{myInfo}</div>;
};

const mapStateToProps = (state) => {
  return {
    myInfo: state.showInfo.info,
  };
};

export default connect(mapStateToProps)(AreaToShow);
