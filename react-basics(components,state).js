import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
 

  render() {
    
    // console.log(React);
    return (
      <div className="App">
       <h2>Child h2</h2>
       <Parent/>
       <h3>{this.props.propNumber}</h3>
      </div>
    );
  }
}


App.defaultProps ={
  propNumber:3,
  propString:"This is prop string",
  propObject:{
    obj1:"i the one",
    obj2:"i am the only one",
    obj3:"only i"
  }
}

class Parent extends Component{
  constructor(props){
    super(props);
    this.state={
     cars:['123','213','14132','a12udi']
    };
    this.handleClick =this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({cars: this.state.cars.reverse()})
  }

  render(){
    
    return (
      <div>
        <h2 onClick={this.handleClick}>Parent h2</h2>
        <Cars msg="cars are not cool" model="42424" coolCars={this.state.cars} />
      </div>
    )
  }
}

Parent.defaultProps = {
  cars:['bmw','merc','city','audi'],
  tree:'random word'
}


class Cars extends Component{
  render(){

    return (

      <div>
        <h3>Cars compoent</h3>
        <p>{this.props.msg}{this.props.model}</p>
        <div>{this.props.coolCars.map((item,i)=>{
          return <p key={i}>{item} </p>;
        })}
        </div>
      </div>
    )
  }
}


export default App;
