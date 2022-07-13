import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products/Products";
import Services from "./components/pages/Services/Services";
import SignUp from "./components/pages/SignUp/SignUp";
import DotLoader from "react-spinners/DotLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
        <DotLoader
        color="#fff"
          loading={loading}
          size={50}
        />
        <h6 className="loading">Loading...</h6>
        </>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
