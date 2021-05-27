import React from "react";
import Search from "./Search";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Search />
                </Route>
              </Switch>
            </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
