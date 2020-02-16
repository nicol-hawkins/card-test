import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import {Button} from 'kc-react-widgets';
import './App.css';

//from lotr challenge
import CardGroup from './components/CardGroup/CardGroup.js';

//from mern starter
import LandingPage from './components/LandingPage/LandingPage.js';
import Project from './components/Project/Project.js';
import AddCard from './components/AddCard/AddCard.js';

//from nicols hmk
import CountryButtons from './components/CountryButtons/CountryButtons';
import Card from './components/Card/Card';
import RemoveButton from './components/RemoveButton/RemoveButton';
import Titlebar from './components/TitleBar/TitleBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 'project demo',
      newCards: [],
      availableCards: []
    };
   
  }

  onNewCard = (title, index) => {
    const newCards = this.state.newCards.slice();
    const availableCards = this.state.availableCards.slice();
    const newCard = availableCards[index];

    newCards.push(newCard);
    availableCards.splice(index, 1)
    // newCards.sort((a, b) => (a.label > b.label) ? 1 : -1);
    console.log('new card', index, title)
    this.setState({
      newCards: newCards,
      availableCards: availableCards,
    });

  };

  removeCard = (index) => {
    const newCards = this.state.newCards.slice();
    const availableCards = this.state.availableCards.slice();
    const newCard = newCards[index];

    availableCards.push(newCard);
    newCards.splice(index, 1);
    availableCards.sort((a, b) => (a.label > b.label) ? 1 : -1);
    
    this.setState({
      availableCards: availableCards,
      newCards: newCards
    });

  };


  render() {

    return (
      <div className="App">
        <Titlebar/>
        <nav className="App-navigation">
         

          <Link to="/profile/">
          <Button onClick={() => console.log('Hello world!')}>
                home
             </Button>
          </Link>

          <Link to="/">
          <Button onClick={() => console.log('Hello world!')}>
                Project
             </Button>
          </Link>

          <Link to="/add/">
          <Button onClick={() => console.log('Hello world!')}>
                add beat
             </Button>
          </Link>


          <Button onClick={this.onNewCard}>
                new card
             </Button>

        </nav>

        <CardGroup>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/profile/' component={Project} />
            <Route exact path='/add/' component={AddCard} />
          </Switch>

          <div className="Card" id="results">
            {this.state.newCards.map((index) => (
              <Card 
                className="card--show card" 
                // info={info}
                >
                  <RemoveButton
                    onClick={() => this.removeCard(index)}>
                  </RemoveButton>
              </Card>
              ))
            }
        </div>
        </CardGroup>
      </div>
    );
  }
}

export default App;
