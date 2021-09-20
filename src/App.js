import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { Container } from "react-bootstrap";

export class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div className="App">
            <div className="App-header">
              <Link to="/" className="link">
                Homepage
              </Link>

              <Link to="/home" className="link">
                Home
              </Link>

              <Link to="/about" className="link">
                About
              </Link>

              <Link to="/contact" className="link">
                Contact
              </Link>
            </div>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
