import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header.component'
import SignInAndRegisterPage from './pages/sign-in-and-register-page/SignInAndRegisterPage.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser, /*selectCol*/ } from './redux/user/user.selectors';
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import CheckoutPage from './pages/checkout-page/CheckoutPage.component';

class App extends Component {

  unsuscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser, /*collectionsArray*/ } = this.props;
    // this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(ss => {
    //       setCurrentUser({
    //         id: ss.id,
    //         ...ss.data()
    //       });
    //     });
    //   }
    //   else {
    //     setCurrentUser(userAuth);
    //     //addCollectionsAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
    //   }
    // })

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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin"
            render={() => this.props.currentUser ?
              (<Redirect to="/" />) :
              (<SignInAndRegisterPage />)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);