import React, { Component } from 'react';
import { Navbar} from 'reactstrap';
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Footer from './components/footer';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
