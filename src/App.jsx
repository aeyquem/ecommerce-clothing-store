import React from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import SignInAndRegisterPage from './pages/sign-in-and-register-page/SignInAndRegisterPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
