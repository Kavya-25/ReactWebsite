import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services'
import SignUp from './components/pages/SignUp/SignUp'

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
