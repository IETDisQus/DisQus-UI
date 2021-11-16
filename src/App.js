import React, { Component } from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";
import { getCurrentUser } from "./oauth2/authClient.js"
import { ACCESS_TOKEN } from "./constants/constant.js";
import LandingPage from "./LandingPage";
import Homepage from "./Homepage";
import Register from "./Register";
import { LinearProgress } from "@mui/material";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        console.log(response);
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LinearProgress/> 
    }

    return (
    <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />  
          <Route path="/home" component={Homepage}/> 
          <Route path="/updateprofile" component={Register} authenticated={this.state.authenticated}
              currentUser={this.state.currentUser}/>  
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
        </Switch>
      </Router> 
      
    );
  }
}

export default App;