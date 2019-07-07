import React, { Component } from 'react';
import UserOutput from './UserData/UserOutput';
import UserInput from './UserData/UserInput';
import './App.css';

class App extends Component {
  state = {username: 'Joe'}
      

  changeHandler = e => {
    this.setState({username: e.target.value});
  }

  render () {
    
    return (
      <div className="App">
        <h2>The First Assignment</h2>
        <UserOutput  username='Dave' />
        <UserOutput  username={this.state.username} />
        <UserInput changed={this.changeHandler.bind(this)} currName={this.state.username}/>
      </div>
    );
  };
}

export default App;
