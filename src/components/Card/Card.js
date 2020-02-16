import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {
    title: '',
    text: '',
  }
  render() {
    let className = 'card--show card';

return (
    <div 
      className={className}>
      <h3>Title: {this.props.title} </h3>
      <textarea className="text-area"></textarea>
      <br></br>
      {this.props.children}
    </div>
    );
  }
}

export default Card;