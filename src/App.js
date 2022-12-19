import React from "react";
import { Footer, Blog, Possibility, Features, WhatGP3, Header } from './containers';
import { Navbar, Brand, CTA } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
