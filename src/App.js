import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Feedback";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <div
              style={{
                boxShadow: "0 0 40px #999999"
              }}
            >
              {" "}
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="justify-content-beginning">
                  Deloitte
                </Navbar.Brand>
                <Nav>
                  <Button variant="dark">
                    <Link to="/Search" className="nav-link" bg="primary">
                      Upload
                    </Link>
                  </Button>
                  <Button variant="dark">
                    <Link to="/UserInput" className="nav-link">
                      Home
                    </Link>
                  </Button>
                </Nav>
              </Navbar>
              <br />
            </div>

            <Route exact path="/UserInput" component={UserInput} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
