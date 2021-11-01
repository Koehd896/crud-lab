import React, { Component } from 'react';
import Reviews from './Reviews';

;
class ReviewInput extends Component {
  
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text)
    this.setState({
      text: ""
    })

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="text" id="text" onChange={this.handleChange} value={this.state.text}></input>
          <input type="submit" id="submit"></input>
        </form>
      </div>
    );
  }
};



export default ReviewInput;
