import React, { useState, useEffect, useRef, Children } from 'react';
import { Router, Route, Link, Redirect, useParams, Switch } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import {createBrowserHistory} from "history";
import Header from './components/Header';
import MainPage from './components/pages/MainPage';
import Message from './components/pages/Message'
import Favorites from './components/pages/Favorites'
import Account from './components/pages/Account'
import AddAnAd from './components/pages/AddAnAd'
import NotFound from './components/pages/NotFound'
import Footer from './components/Footer';
import store from './reducers/slices';
import { LoginForm,RegistrationForm} from './components/pages/Login&Registration'

import './App.css';

const history = createBrowserHistory()
export {history}

function App() {
  return (
    <div className='wrapper'>
      <Router history={history}>
        <Provider store={store}>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/message" component={Message} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/account" component={Account} />
              <Route path="/add/an/ad" component={AddAnAd} />
              <Route path="/login" component={LoginForm} />
              <Route path="/registration" component={RegistrationForm} />
              <Route component = {NotFound} />
            </Switch>
          </main>
          <footer>
            <Footer/>
          </footer> 
        </Provider>
      </Router>
    </div>
  )
}

export default App;

