import React, { Component } from "react";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}
//connect age to reducer's age
const mapStateToProps = store => {
  return {
    age: store.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelItem: id => dispatch({ type: "DEL_ITEM", key: id })
  };
};
//connect app
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
