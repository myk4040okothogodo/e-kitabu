import React from 'react';
import './App.css';
import { FullpageView } from './containers';
import { Navbar } from './components';
import { Word } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = ()  => (
    <>
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <FullpageView />
        </Route>
        <Route path="/word " children={<Word />}></Route>
      </Switch>
    </Router>
    </>
);

export default App;
