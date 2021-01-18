import React from 'react';
import Home from './Home/Home';
import Navbars from './Navbars/Navbars';
import Footer from './Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Navbars />
        <Footer />
    </div>
  );
}

export default App;
