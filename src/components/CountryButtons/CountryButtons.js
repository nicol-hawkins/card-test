import React, { Component } from 'react';
import './CountryButtons.css';

class CountryButtons extends Component {
  render() {

    let className = 'btn-primary';

return (
 

    <div 
      className={className} 
      onClick={this.props.onClick}>
        {this.props.children}
        New Card
    </div>
 

    );
  }
}

export default CountryButtons;