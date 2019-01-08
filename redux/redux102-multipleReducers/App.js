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
          <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div className="col">
          <div>
            <span>B:</span> <span>{this.props.b} </span>
          </div>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B </button>
        </div>
      </div>
    );
  }
}

//send the action
const mapDispachToProps = dispatch=>{
  return {
    updateA: (b) => dispatch({type:'UPDATE_A',b:b}),
    updateB: (a) => dispatch({type:"UPDATE_B",a:a})
  }
}
 

//connects the props to store
const mapStateToProps = (state)=>{
  return {
    a:state.rA.a,
    b:state.rB.b
  }
}




export default connect(mapStateToProps, mapDispachToProps)(App);

//steps to initiate redux
//create a store 
//inside it make reducer which contain initial state and action
//mapStoreToProps   & mapDispachToProps
//connect them using connect(mapStoreToProps,mapDispachToProps)
