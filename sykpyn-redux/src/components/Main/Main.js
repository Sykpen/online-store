import React, { Component } from "react";
import { connect } from "react-redux";
import { showInfo } from "../../actions/actions";

class Main extends Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.showInfo}>
        Показать инфу
      </button>
    );
  }
}

const mapDispatchToProps = {
  showInfo,
};

export default connect(null, mapDispatchToProps)(Main);
