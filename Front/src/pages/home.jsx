import React, { Component } from 'react';
import Portfolio from './portfolio';
import AboutMe from './aboutMe';
import Contact from './contact';
import Header from '../components/header';
import Footer from '../components/footer';
import MainNavbar from '../components/mainNavbar';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <MainNavbar />
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default Home;
