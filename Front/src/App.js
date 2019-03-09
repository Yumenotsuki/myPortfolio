import React, { Component } from 'react';
import { Navbar} from 'reactstrap';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from './pages/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
