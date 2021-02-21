import React from 'react';
import {Route} from 'react-router-dom'

import Home from './Home/Home';
import Register from './Register/Register';
import Businesses from './Businesses/Businesses';
import Login from './Login/Login';
import AboutUs from './AboutUs/AboutUs';
import Product from './Components/Product/Product';
import AddProduct from './Components/Product/AddProduct';
import Navbars from './Navbars/Navbars';
import Footer from './Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Navbars />
        <Route exact path='/' component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Register' component={Register} />
        <Route path='/Login' component={Login} />
        <Route path='/Product' component={Product} />
        <Route path='/AddProduct' component={AddProduct} />
        <Footer />
    </div>
  );
}

export default App;
