import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: "Fullstack React/Nodejs developer who is passionate about Japan end enjoying coding in SQL",
      skillsIT: {
        languages: "Javascript, SQL, HTML5, CSS",
        frameworks: "React, Nodejs, Express",
        databases: "Mysql, SQLite",
        ide: "Atom, Visual Studio Code"
      },
      languages: [
        {
          language: "French",
          level: "native"
        },
        {
          language: "Japanese",
          level: "fluent"
        },
        {
          language: "English",
          level: "fluent"
        }
      ],
      exp: "",
      formation: "",
      volonteerExp: ""
      };
    }
  render() {
    return (
      <div>

        <h2>Fullstack React/Nodejs developer who is passionate about Japan end enjoying coding in SQL</h2>
        <br/>
        <h4>Technical stack</h4>
        <strong>React, Nodejs, Express, Javascript, SQL, HTML5, CSS, Mysql, SQLite, Atom, Visual Studio Code</strong>
        <br />
        <h4>Languages</h4>
        <p>French(native), English(fluent), Japanese(fluent)</p>
        <br />
        <h4>WORK EXPERIENCE</h4>
        <br />
        <h4>FORMATION</h4>
        <h4>VOLONTEER WORK EXPERIENCE</h4>
        <br />



      </div>
    );
  }
}
