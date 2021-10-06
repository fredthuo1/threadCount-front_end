import React from 'react';
import {Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import AboutUs from '../src/pages/AboutUs/AboutUs';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';
import AddProduct from './Components/Product/AddProduct';
import Dashboard from './Components/Dashboard/Dashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import CustomerDashboard from './Components/CustomerDashboard/CustomerDashboard';
import ProductsList from './Components/Dashboard/ProductsList';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Navbars from './Components/Navbars/Navbars';
import Footer from './Components/Footer/Footer';

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
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/AdminDashboard' component={AdminDashboard} />
        <Route path='/CustomerDashboard' component={CustomerDashboard} />
        <Route path='/ProductsList' component={ProductsList} />
        <Route path='/ForgotPassword' component={ForgotPassword} />
        <Footer />
    </div>
  );
}

export default App;
