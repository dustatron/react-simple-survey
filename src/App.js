import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
      },
      submitted: false
    }
  };
  handleNameSubmit(event) {
    let name = this.refs.name.value;
    this.setState({name:name},function() {
      console.log(this.state);
    });

    event.preventDefault();
  };

  render() {

    let user;
    var questions;
    if(this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>;
    }else if(!this.state.name && this.state.submitted === false) {
      user = <span><h2>Please enter your name to begin the survey.</h2>
      <form onSubmit={this.handleNameSubmit.bind(this)}>
        <input type='text' placeholder="Enter Name..." ref='name' />
      </form>
      </span>;
      questions = '';

    }else if(this.state.name && this.state.submitted === true) {

    }else {
      console.log('Error: failed if statement');
    };//END IF
    return (
      <div className="App text-center">
        <div className="App-header">

          <h2>Simple Survey</h2>
        </div>
        <div className="text-center"></div>
        {user}
      </div>
    );
  }
}

export default App;
