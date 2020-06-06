import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import SignInAndRegisterPage from './pages/sign-in-and-register-page/SignInAndRegisterPage';
import { auth } from './firebase/firebase.utils'




class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })

  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
