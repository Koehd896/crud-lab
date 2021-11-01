import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(event.target.text.value)
    this.setState({
      text: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="text" id="text"value={this.state.text}></input>
          <input type="submit" id="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
