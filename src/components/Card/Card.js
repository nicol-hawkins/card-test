import React, { Component } from 'react';
import './Card.css';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import Highlight from 'react-highlight';
import _ from 'lodash'

class Card extends Component {
  state = {
    id: 1,
    title: 'cover with tests',
    completed: false,
    textarea: `Multiline example
    text value`,
    highlight: false

  }

  virtualServerCallback = (newState) => {
     if (this.state.simulateXHR) {
     window.setTimeout(function() {
       this.changeState(newState);
     }.bind(this), this.state.XHRDelay);
     } else {
     this.changeState(newState);
     }
   };

   isStringAcceptable = (string) => {
  return (string.length >= 1);  // Minimum 4 letters long
};

changeState = (newState) => {
  this.setState(newState);
};




  render() {
    let className = 'card--show card';

return (

  <div
  className={className}
  >
  <h3>Title: {this.props.title} </h3>
  <RIETextArea
           value={this.state.textarea}
           change={this.virtualServerCallback}
           propName="textarea"
           className={this.state.highlight ? "editable" : ""}
           validate={this.isStringAcceptable}
           classLoading="loading"
           classInvalid="invalid"
           isDisabled={this.state.isDisabled} />
         {this.state.showSource}

       </div>
);

};
}

export default Card;
