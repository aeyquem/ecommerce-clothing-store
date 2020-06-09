import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import SignInAndRegisterPage from './pages/sign-in-and-register-page/SignInAndRegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'




class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(ss => {
          this.setState({
            currentUser: {
              id: ss.id,
              ...ss.data()
            }
          });
        });
      }
      else {
        this.setState({ currentUser: userAuth });
      }
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
