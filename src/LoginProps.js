import React, { Component } from "react";
import Welcome from "./WelcomeProps";

export default class LoginProps extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "Priya", temp:"Priya"};
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({temp:this.state.username})
    // this.setState({ username: event.target.value });
    

  
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Using Props</h1>
        <form onSubmit={this.handleClick}>
        
          <label>  Username:</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      
        <button type="submit">
          Submit
        </button>
        </form>
        <Welcome username={this.state.temp}/>
      </div>
    );
  }
}
