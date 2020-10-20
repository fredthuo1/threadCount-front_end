import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Businesses from './Businesses/Businesses';
import Home from './Home/Home';
import Navbars from './Navbars/Navbars';
import Footer from './Footer/Footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
        <Navbars />
        <Home />
        <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
