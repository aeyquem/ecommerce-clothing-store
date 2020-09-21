import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header.component'
import SignInAndRegisterPage from './pages/sign-in-and-register-page/SignInAndRegisterPage.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser, /*selectCol*/ } from './redux/user/user.selectors';
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import CheckoutPage from './pages/checkout-page/CheckoutPage.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);