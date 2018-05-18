import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchData } from "./actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    state: state.data
  };
}

export default connect(mapStateToProps, { fetchData })(App);
