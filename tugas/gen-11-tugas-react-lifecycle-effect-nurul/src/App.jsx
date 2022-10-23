import React, {Component} from "react";
import Lifecycle from "./Lifecycle";
import SideEffect from "./SideEffect";

class App extends Component {
 constructor() {
  super();
  this.state = {
    showLifecycle : true,
    showSideEffect: true
  }
  
 }
 
  
 render() {
  return (
    <div>
      <h1>Lifecycle Component</h1>
      <hr />
      <button onClick={()=> this.setState({showLifecycle: false})}>Clear Data</button>
      <button onClick={()=> this.setState({showLifecycle: true})}>Show Data</button> 
      {this.state.showLifecycle ? <Lifecycle/> : null}     
      <br />
      <br />
      <h1>Side Effect Component</h1>
      <hr />
      <button onClick={()=> this.setState({showLifecycle: false})}>Clear Data</button>
      <button onClick={()=> this.setState({showLifecycle: true})}>Show Data</button> 
      {this.state.showLifecycle ? <SideEffect/> : null}

    </div>
  );
 }

}

export default App;