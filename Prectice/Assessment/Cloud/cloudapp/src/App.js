import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { PATHNAME } from './constants/apiConstants';
import Home from './components/Home/Home';
import Detail from './components/UserDetail/Detail';
import Landing from './components/Landing/Landing'
import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';  

function App(props) {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Landing/>
            </Route>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
            <PrivateRoute path={"/"+localStorage.getItem(PATHNAME)}>
              <Detail/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
