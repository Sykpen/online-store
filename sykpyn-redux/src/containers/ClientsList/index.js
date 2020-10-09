import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getClientsList } from "../../actions";
import Client from "./Client";

class ClientsList extends Component {
  componentDidMount() {
    return this.props.getClientsList();
  }

  render() {
    const clientsList = [];
    let clients = this.props.clientsList;
    clients.clients &&
      clients.clients.forEach((client) => {
        clientsList.push(
          <Client
            id={client.id}
            balance={client.balance}
            bonus={client.bonus}
            email={client.email}
            key={client.id}
            first_name={client.first_name}
            last_name={client.last_name}
            nick_name={client.nick_name}
          />
        );
      });
    return <Fragment>{clientsList}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    clientsList: state.client.clientsList,
  };
};

const mapDispatchToProps = {
  getClientsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);
