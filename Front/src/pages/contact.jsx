import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const data = {
  firstName: "Mark",
  lastName: "Otto",
  email: "",
  text: ""
}

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Mark",
      lastName: "Otto",
      email: "",
      text: ""
    };
  }

  submitHandler = event => {
    event.preventDefault();

    fetch("/portfolio/contact", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(res => {
          console.log(res)
          /*this.setState({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            text: data.message
          });*/
        }).catch(e => {
      console.error(e);
      alert('Erreur')
    });

  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.lastName, this.state.firstName, this.state.email, this.state.text);
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                value={this.state.lastName}
                name="lastName"
                label="Last name"
                onChange={this.changeHandler}
                type="text"
                required
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                value={this.state.firstName}
                name="firstName"
                label="First name"
                onChange={this.changeHandler}
                type="text"
                required
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                value={this.state.email}
                name="email"
                label="Email"
                onChange={this.changeHandler}
                type="email"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                value={this.state.text}
                name="text"
                type="textarea"
                label="Message"
                onChange={this.changeHandler}
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
        {/**/}<h4>Social Network</h4>
        <p>Linkedin : https://www.linkedin.com/in/ marion-koo-sin-lin-javascript-web-developer/ Git : https://github.com/Yumenotsuki</p>
      </div>
    );
  }
}

export default FormsPage;
