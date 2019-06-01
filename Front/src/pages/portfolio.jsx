  import React from 'react';
  import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
  import HarryPotter from '../img/harryPotter.png';
  import LoireEnVert from '../img/loireEnVert.png';
  import PortfolioWild from '../img/portfolioWild.png';

const Portfolio = (props) => {
  return (
    <div>
    <MDBRow>
    <MDBCol>
      <MDBCard>
        <MDBCardImage top src={LoireEnVert} alt="Card image cap" />
        <MDBCardBody>
          <MDBCardTitle>Loire en Vert project</MDBCardTitle>
          <h5>Mobile application for Loire en Vert Association</h5>
          <MDBCardText>Technologies: React, NodeJS, Express JS, Axios, Mysql, Reactstrap</MDBCardText>
          <MDBBtn href="https://play.google.com/store/apps/details?id=fr.loireenvert.cordova&hl=fr" target="blank">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard>
        <MDBCardImage top src={HarryPotter} alt="Card image cap" />
        <MDBCardBody>
          <MDBCardTitle>Spotter project</MDBCardTitle>
          <h5>Harry Potter game project</h5>
          <MDBCardText>Technologies : React</MDBCardText>
          <MDBBtn href="https://luckarts.github.io/Spotter/#/" target="blank">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard>
        <MDBCardImage top src={PortfolioWild} alt="Card image cap" />
        <MDBCardBody>
          <MDBCardTitle>Portfolio project</MDBCardTitle>
          <MDBCardText>Technologies: html, css, Bootstrap</MDBCardText>
          <MDBBtn href="https://wildcodeschool.github.io/lyon-0918-portfolio/page5.html" target="blank">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
};

export default Portfolio;
