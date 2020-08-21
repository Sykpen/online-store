import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { showInfo } from "../../actions/actions";
import AreaToShow from "../AreaToShow/AreaToShow";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <button className="btn btn-primary" onClick={this.props.showInfo}>
          Показать инфу
        </button>
        <AreaToShow />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  showInfo,
};

export default connect(null, mapDispatchToProps)(Main);
