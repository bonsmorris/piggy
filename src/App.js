import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import launchReport from './components/launchReport';
import receiveReport from './components/receiveReport';
import epicLogo from 'C:/Users/Bon Scott/Desktop/ContractWork/Piggy/piggy/src/pics/epicLogo.jpg';
import schedule from './components/schedule';

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img src= {epicLogo}  ></img><Link to={"/receiveReport"}>a</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Create Account</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/schedule"}>Pig Schedule</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/launchReport"}>Launched Pig Report</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/receiveReport"}>Received Pig Report</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        
          <Switch>
            <Route exact path='/sign-up' component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/receiveReport" component={receiveReport}/>
            <Route path="/launchReport" component={launchReport}/>
            <Route path="/schedule" component={schedule}/>

          </Switch>
        
      </div>
    </div></Router>
  );
}

export default App;