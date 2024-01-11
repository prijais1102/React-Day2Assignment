import React, { Component } from 'react';

class RegistrationClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${this.state.name}, Email: ${this.state.email}, Password: ${this.state.password}`);
  };

  render() {
    return (
        <div>
        <h1>Using Class Component-</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          id="name"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />

        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          value={this.state.password}
          onChange={(event) => this.setState({ password: event.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
export default RegistrationClass;
