import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header'
import SignInAndRegisterPage from './pages/sign-in-and-register-page/SignInAndRegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component {

  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(ss => {
          setCurrentUser({
            id: ss.id,
            ...ss.data()
          });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    })

  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin"
            render={() => this.props.currentUser ?
              (<Redirect to="/" />) :
              (<SignInAndRegisterPage />)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);