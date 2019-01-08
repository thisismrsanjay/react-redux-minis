import React, {Component} from "react";
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span> <span>{this.props.a} </span>
          </div>
          <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div className="col">
          <div>
            <span>B:</span> <span>{this.props.b} </span>
          </div>
          <button onClick={this.props.updateB}>Update B </button>
        </div>
      </div>
    );
  }
}

//connects the props to store
const mapStoreToProps = (store)=>{
  return {
    a:store.a,
    b:store.b
  }
}

//send the action
const mapDispchToProps = (dispatch)=>{
  return {
    updateA: () => dispatch({type:'UPDATE_A'}),
    updateB: () => dispatch({type:"UPDATE_B"})
  }
}


export default connect(mapStoreToProps,mapDispchToProps)(App);

//steps to initiate redux
//create a store 
//inside it make reducer which contain initial state and action
//mapStoreToProps   & mapDispachToProps
//connect them using connect(mapStoreToProps,mapDispachToProps)
