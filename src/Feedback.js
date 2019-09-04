import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, InputGroup, FormControl } from "react-bootstrap";
import { MDBInput } from "mdbreact";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFeedChange = this.handleFeedChange.bind(this);

    this.state = {
      email: "",
      feedback: ""
    };
  }

  async handleChange(e) {
    console.log("omi");
    await this.setState({ email: e.target.value });
    console.log(this.state.email);
  }

  async handleFeedChange(ee) {
    console.log(this.state.feedback);

    await this.setState({ feedback: ee.target.value });
    console.log(this.state.feedback);
  }

  pushData = () => {
    console.log("welcome");
    fetch("/insertFeedback", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        username: this.state.email,
        feedback: this.state.feedback
      })
    });
  };
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <h1 align="centre">Share Feedback </h1>
            <label for="Name">Enter Name </label>
            <input
              onChange={this.handleChange}
              type="name"
              name="name"
              className="form-control"
              placeholder="Enter your Name"
            />
            <div>
              <label for="Name">Enter Feedback </label>

              <MDBInput
                type="textarea"
                rows="5"
                onChange={this.handleFeedChange}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={this.pushData}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default UserInput;
