import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Error from "./components/Error";

const User = props => {
  console.log(props);
  return <div>Welcome {props.name}</div>;
};

class App extends Component {
  state = {
    isLoggedIn: false,
    username: ""
  };
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" activeStyle={{ color: "green" }} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: "green" }} exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={{ color: "green" }} exact>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" activeStyle={{ color: "green" }} exact>
                User
              </NavLink>
            </li>
          </ul>
          <input
            type="button"
            value={this.state.isLoggedIn ? "Log out" : "Login"}
            onClick={() =>
              this.setState(prevState => {
                return { isLoggedIn: !prevState.isLoggedIn };
              })
            }
          />
          <Route path="/" exact strict component={Home} />
          <Route path="/about" exact strict component={About} />
          <Route path="/contact" exact strict component={Contact} />
          <Route
            path="/user/:username"
            exact
            render={({ match }) =>
              this.state.isLoggedIn ? (
                <User name={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          {/* <Route component={Error} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
