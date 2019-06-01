import React from 'react';
//import './../css/footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Marion-2019
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
