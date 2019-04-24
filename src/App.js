import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react"; 
import './App.css';
import People from './components/People'

const App = () => (
  <div>
    <Container>
      <Switch>
       
        <Route exact path="/people" component={People} />
        
      </Switch>
    </Container>
  </div>
);

export default App;
