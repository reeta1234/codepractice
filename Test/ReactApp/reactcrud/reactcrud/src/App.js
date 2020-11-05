import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AddUser from "./components/add-users.component";
import User from "./components/users.component";
import usersList from "./components/users-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/users" className="navbar-brand">
            Myapp
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/users"]} component={usersList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/users/:id" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;