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



class App extends Component {
 

  render() {
    return (
      <div className="App">
        <Body/>
      </div>
    );
  }
}

class Body extends Component{
  constructor(props){
    super(props);
    this.state={
      r:0
    }
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    this.setState({r:Math.floor(Math.random()*10)})
  }

  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit something
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.r}/>
      </div>
    )
  }

}

class Numbers extends Component {

  componentWillMount(){
    console.log("component will mount here");
  }
  componentDidMount(){
    console.log("component Did mount here");
  }
  componentWillReciveProps(newProps){
    console.log("component will recive props");
  }
  shouleComponentUpdate(newProps,nextState){
    console.log('called should component Update')
    return true;
  }
  componentWillUpdate(newProps,nextState){
    console.log('called component will update');
  }
  componentDidUpdate(newProps,nextState){
    console.log('Called component will update');
  }
  componentWillMount(){
    console.log('Called component will unmount');
  }

  render(){
    return(
      <div>
        {this.props.myNumber}
      </div>
    )
  }
}



export default App;
