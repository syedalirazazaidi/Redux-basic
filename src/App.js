import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreator from './Store/Action';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     age  :21
  //    };
  // }
  // ageUp=()=>{
  //   this.setState({
  //     age  : this.state.age+1
  //   })
  // }
  // ageDown=()=>{
  //   this.setState({
  //     ...this.state,
  //     age : this.state.age- 1
  //   })
  // }
  render() {
    return (
      <div>
        <div>A =<span>{this.props.a}</span></div>
        <div><button onClick={this.props.ageUp}>Age Up</button></div>
        <div>B =<span>{this.props.b}</span></div>
        <div><button onClick={this.props.ageDown}>Age Do</button></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {a : state.a,
    b:state.b,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch(actionCreator.ageUp(1)),
    ageDown: () => dispatch(actionCreator.ageDown(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);